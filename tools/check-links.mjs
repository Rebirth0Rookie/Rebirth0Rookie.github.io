import fs from 'node:fs';
import path from 'node:path';

const publicDir = path.resolve('public');
const inspectableExtensions = new Set(['.html', '.xml']);
const files = [];

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const filePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      walk(filePath);
    } else {
      files.push(filePath);
    }
  }
}

function normalizeReference(reference) {
  const decoded = reference
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .trim()
    .replace(/^["']|["']$/g, '');

  if (
    !decoded ||
    decoded.startsWith('#') ||
    decoded.startsWith('//') ||
    /^(?:data|javascript|mailto|tel):/i.test(decoded) ||
    /^[a-z][a-z\d+.-]*:/i.test(decoded)
  ) {
    return null;
  }

  return decoded.split(/[?#]/, 1)[0];
}

function resolveTarget(sourceFile, reference) {
  if (reference.startsWith('/')) {
    return path.join(publicDir, reference);
  }

  return path.resolve(path.dirname(sourceFile), reference);
}

function targetExists(target) {
  return (
    fs.existsSync(target) ||
    fs.existsSync(path.join(target, 'index.html'))
  );
}

if (!fs.existsSync(publicDir)) {
  console.error('public/ does not exist. Run `pnpm build` first.');
  process.exit(1);
}

walk(publicDir);

const missing = [];
let checked = 0;

for (const sourceFile of files) {
  if (!inspectableExtensions.has(path.extname(sourceFile))) {
    continue;
  }

  const contents = fs.readFileSync(sourceFile, 'utf8');
  const references = [
    ...contents.matchAll(/(?:href|src)=["']([^"'<>]+)["']/gi),
    ...contents.matchAll(/url\(["']?([^)'"\s]+)["']?\)/gi),
  ];

  for (const match of references) {
    const reference = normalizeReference(match[1]);

    if (!reference) {
      continue;
    }

    const target = resolveTarget(sourceFile, reference);

    if (!target.startsWith(publicDir + path.sep) && target !== publicDir) {
      continue;
    }

    checked += 1;

    if (!targetExists(target)) {
      missing.push({
        source: path.relative(publicDir, sourceFile),
        reference,
      });
    }
  }
}

if (missing.length > 0) {
  console.error('Missing local targets:');

  for (const item of missing) {
    console.error(`- ${item.source}: ${item.reference}`);
  }

  process.exit(1);
}

console.log(`Checked ${checked} local references; all targets exist.`);
