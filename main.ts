// One Line, No Deadline Met — writes a single-line excuse for a missed
// deadline to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const ENTRY =
  "I finished the work on time, then spent the remaining hour deciding whether 'finished' was a promise or more of a vibe.";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (resolve(outDir) === resolve(".")) {
  fail("output directory must not be the current directory");
}

const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 200) {
  fail(`entry must be 1-200 characters, got ${chars.length}`);
}
if (ENTRY.trim().length === 0) {
  fail("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  fail("entry must be a single line");
}
for (const ch of ENTRY) {
  const code = ch.codePointAt(0)!;
  if (code < 0x20 || code === 0x7f) {
    fail("entry must not contain control characters");
  }
}

mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, ENTRY + "\n", "utf8");

// Read-back check: what landed on disk must be exactly the entry,
// counted in code points (not UTF-16 units) so the gate's 1-200 rule
// is checked the same way the scorer counts it.
const onDisk = readFileSync(target, "utf8");
const diskEntry = onDisk.replace(/\n$/, "");
if (diskEntry !== ENTRY) {
  fail("read-back check failed: entry.txt does not match the entry");
}
if ([...diskEntry].length !== chars.length) {
  fail("read-back check failed: character count on disk differs");
}

console.log(`wrote ${target} (${chars.length} characters)`);
