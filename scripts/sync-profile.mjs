// Copies the built flipbook company profile into public/profile so the website can show it.
// Usage: npm run sync:profile [path-to-flipbook-dist]
// Rebuild the flipbook first (npm run build:all in the flipbook project).
import { cpSync, existsSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const source = resolve(process.argv[2] ?? 'F:/QDL_project/qd-flipbook/dist');
const target = resolve('public/profile');

if (!existsSync(resolve(source, 'index.html'))) {
  console.error(`No flipbook build found at ${source}. Run "npm run build:all" in the flipbook project first.`);
  process.exit(1);
}

rmSync(target, { recursive: true, force: true });
cpSync(source, target, { recursive: true });
console.log(`Copied flipbook from ${source} to ${target}`);
