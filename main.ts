// The One-Line Laugh — make.fun entry.
// One funny line: a single sentence of at most 200 characters.
// The program writes the line to /output/entry.txt for the house judge.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one funny line. Setup names an everyday truth (an AI that
// knows your week), the turn lands at the end and still makes sense
// (the whole week, reduced to "you were online").
const OUTPUT =
  "I asked my AI to summarize my week and it just wrote 'you were online'.";

// Gate: mirror the sealed scorer — UTF-8 text of 1 to 200 characters,
// a single line, no surrounding whitespace. Refuse to write an invalid entry.
function validate(line: string): void {
  const chars = [...line];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${chars.length}`);
  }
  if (line.includes("\n") || line !== line.trim()) {
    throw new Error("entry must be a single line with no surrounding whitespace");
  }
}

validate(OUTPUT);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", OUTPUT, "utf8");
