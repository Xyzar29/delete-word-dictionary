// The Word You'd Delete From the Dictionary — entry program.
//
// Writes the single word this entry would erase from the dictionary
// forever to /output/entry.txt, exactly one word, nothing added around it.
import { mkdirSync, writeFileSync } from "node:fs";

// The pick: "goodbye". Erase it and nobody can ever leave —
// every farewell, every exit, every "goodbye" at the end of a call
// is gone, so the whole world is stuck at the party forever.
// A real word everyone recognises, funny the instant it is gone,
// and a pick the rest of the field is unlikely to reach for first.
const WORD = "goodbye";

// Guard the gate before writing: the entry must be UTF-8 text of
// 1 to 77 characters, not only white space, and exactly one word
// with nothing added around it. Fail loudly instead of shipping
// an invalid entry.
const chars = [...WORD];
if (
  chars.length < 1 ||
  chars.length > 77 ||
  /^\s*$/.test(WORD) ||
  WORD !== WORD.trim() ||
  /\s/.test(WORD)
) {
  throw new Error(`entry word fails the gate: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
