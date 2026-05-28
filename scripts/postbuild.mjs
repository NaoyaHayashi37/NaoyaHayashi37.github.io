import { readdir, readFile, rename, stat, writeFile } from "node:fs/promises";
import { join } from "node:path";

const OUT_DIR = "out";

const RENAMES = [
  { from: "opengraph-image", to: "opengraph-image.png" },
  { from: "twitter-image", to: "twitter-image.png" },
];

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function renameStaticAssets() {
  for (const { from, to } of RENAMES) {
    const fromPath = join(OUT_DIR, from);
    if (await exists(fromPath)) {
      await rename(fromPath, join(OUT_DIR, to));
      console.log(`renamed: ${from} → ${to}`);
    }
  }
}

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(path);
    } else if (entry.name.endsWith(".html")) {
      yield path;
    }
  }
}

async function rewriteHtml() {
  for await (const path of walk(OUT_DIR)) {
    const original = await readFile(path, "utf8");
    let updated = original;
    for (const { from, to } of RENAMES) {
      updated = updated.replaceAll(`/${from}?`, `/${to}?`);
      updated = updated.replaceAll(`/${from}"`, `/${to}"`);
    }
    if (updated !== original) {
      await writeFile(path, updated);
      console.log(`updated refs: ${path}`);
    }
  }
}

await renameStaticAssets();
await rewriteHtml();
