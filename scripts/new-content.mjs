import { access, mkdir, writeFile } from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const collection = process.argv[2];
const title = process.argv.slice(3).join(' ').trim();
const allowed = new Set(['writing', 'notes', 'projects', 'research', 'experience', 'daily']);

if (!allowed.has(collection) || !title) {
  console.error('Usage: npm run new:note -- "Title" (or new:writing, new:project, new:research, new:experience, new:daily)');
  process.exit(1);
}

const slug = title
  .normalize('NFKC')
  .toLocaleLowerCase('en')
  .replace(/[’']/g, '')
  .replace(/[^\p{L}\p{N}]+/gu, '-')
  .replace(/^-|-$/g, '');

if (!slug) {
  console.error('The title did not produce a usable filename. Include at least one letter or number.');
  process.exit(1);
}

const date = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Shanghai' });
const targetDirectory = path.join(process.cwd(), 'src', 'content', collection);
const target = path.join(targetDirectory, `${collection === 'daily' ? date : slug}.md`);

try {
  await access(target, constants.F_OK);
  console.error(`Refusing to overwrite existing content: ${target}`);
  process.exit(1);
} catch {
  // The expected path does not exist yet.
}

const shared = `title: ${JSON.stringify(title)}
description: ""
updated: ${date}
tags: []
status: seed
draft: true
featured: false`;

const frontmatter = {
  writing: `${shared}\ndate: ${date}`,
  notes: `${shared}\ndate: ${date}\ntype: learning`,
  projects: `${shared}\nstartDate: ${date}`,
  research: `${shared}\ndate: ${date}\ntopic: ""`,
  experience: `${shared}\ndate: ${date}\ncategory: workflow`,
  daily: `${shared}\ndate: ${date}`,
}[collection];

const body = collection === 'daily'
  ? '## 今日关注\n\n## 论文与模型\n\n## 工具与开源\n\n## 与研究的关联\n\n## 来源与核验\n\n<!-- 逐项记录事件日期、原始链接、已核实事实、个人判断与局限。核验后再改 draft: false；无重要进展无需凑数。 -->'
  : 'Start writing here.';
const content = `---\n${frontmatter}\n---\n\n${body}\n`;
await mkdir(targetDirectory, { recursive: true });
await writeFile(target, content, { encoding: 'utf8', flag: 'wx' });
console.log(`Created ${path.relative(process.cwd(), target)}`);

