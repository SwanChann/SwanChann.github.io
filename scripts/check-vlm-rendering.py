"""Check built VLM prose for literal bold markers and missing teaching images."""

from __future__ import annotations

import argparse
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit


class Prose(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.article = False
        self.code_depth = 0
        self.literal_markers: list[str] = []
        self.images: list[dict[str, str | None]] = []
        self.strong = 0

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = dict(attrs)
        if tag == "article" and "data-pagefind-body" in values:
            self.article = True
        if self.article:
            if tag in ("pre", "code"):
                self.code_depth += 1
            elif tag == "strong":
                self.strong += 1
            elif tag == "img":
                self.images.append(values)

    def handle_endtag(self, tag: str) -> None:
        if tag in ("pre", "code") and self.article:
            self.code_depth = max(0, self.code_depth - 1)
        elif tag == "article":
            self.article = False

    def handle_data(self, data: str) -> None:
        if self.article and not self.code_depth and "**" in data:
            self.literal_markers.append(data.strip())


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--site", default="dist")
    parser.add_argument("--base", default="/")
    args = parser.parse_args()
    site = Path(args.site).resolve()
    base = "/" + args.base.strip("/") + "/" if args.base.strip("/") else "/"
    pages = sorted((site / "vlm").glob("*/index.html"))
    failures: list[str] = []
    image_count = strong_count = 0
    assets: set[str] = set()
    for page in pages:
        prose = Prose()
        prose.feed(page.read_text(encoding="utf-8"))
        strong_count += prose.strong
        for text in prose.literal_markers:
            failures.append(f"{page.parent.name}: literal bold markers: {text[:140]}")
        current = "https://local.test" + base + "vlm/" + page.parent.name + "/"
        for values in prose.images:
            image_count += 1
            src = values.get("src") or ""
            url = urlsplit(urljoin(current, src))
            if url.netloc != "local.test" or not url.path.startswith(base + "images/vlm/"):
                failures.append(f"{page.parent.name}: unexpected teaching image path: {src}")
                continue
            relative = unquote(url.path[len(base):])
            target = (site / relative).resolve()
            if not target.is_relative_to(site) or not target.is_file():
                failures.append(f"{page.parent.name}: missing image: {src}")
            assets.add(relative)
            if not values.get("alt") or not values.get("width") or not values.get("height"):
                failures.append(f"{page.parent.name}: missing image alt or dimensions: {src}")
    if len(pages) != 20:
        failures.append(f"Expected 20 VLM detail pages, found {len(pages)}")
    if image_count == 0:
        failures.append("No VLM teaching illustrations found")
    for failure in failures:
        print(failure)
    print(f"VLM prose pages={len(pages)}, strong elements={strong_count}, image placements={image_count}, "
          f"unique images={len(assets)}, errors={len(failures)}, base={base}")
    return int(bool(failures))


if __name__ == "__main__":
    raise SystemExit(main())
