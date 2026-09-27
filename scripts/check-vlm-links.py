"""Check built VLM routes and internal VLM links, including fragment targets."""

from __future__ import annotations

import argparse
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit


class Links(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.hrefs: list[str] = []
        self.ids: set[str] = set()

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = dict(attrs)
        if values.get("id"):
            self.ids.add(values["id"] or "")
        if tag == "a" and values.get("href"):
            self.hrefs.append(values["href"] or "")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--site", default="dist")
    parser.add_argument("--base", default="/")
    args = parser.parse_args()
    site = Path(args.site).resolve()
    base = "/" + args.base.strip("/") + "/" if args.base.strip("/") else "/"
    route = base + "vlm/"
    pages = sorted(site.rglob("*.html"))
    parsed: dict[Path, Links] = {}
    for page in pages:
        links = Links()
        links.feed(page.read_text(encoding="utf-8"))
        parsed[page] = links

    failures: list[str] = []
    checked = 0
    for page, links in parsed.items():
        current = base + page.relative_to(site).as_posix().removesuffix("index.html")
        for href in links.hrefs:
            target = urlsplit(urljoin("https://local.test" + current, href))
            if target.netloc != "local.test" or not target.path.startswith(route):
                continue
            checked += 1
            path = unquote(target.path)
            if not path.startswith(base):
                failures.append(f"{page}: link escapes base: {href}")
                continue
            relative = path[len(base) :].strip("/")
            target_file = site / relative / "index.html"
            if not target_file.is_file():
                failures.append(f"{page}: missing route: {href}")
            elif target.fragment and unquote(target.fragment) not in parsed[target_file].ids:
                failures.append(f"{page}: missing anchor: {href}")

    expected = site / "vlm" / "index.html"
    if not expected.is_file():
        failures.append("Missing VLM index")
    count = len(list((site / "vlm").glob("*/index.html")))
    if count < 15:
        failures.append(f"Expected at least 15 VLM detail routes, found {count}")
    for failure in failures:
        print(failure)
    print(f"VLM routes={count}, internal links checked={checked}, errors={len(failures)}, base={base}")
    return 1 if failures else 0


if __name__ == "__main__":
    raise SystemExit(main())
