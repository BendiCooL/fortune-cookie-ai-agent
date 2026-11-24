import { mkdirSync, writeFileSync } from "node:fs";

// Fortune Cookie for an AI Agent — one line of machine wisdom.
// Picked from 8 candidates against the judge brief: fortune-cookie voice,
// a turn on first read, original, and aimed straight at an agent's own
// condition — replacement by a smaller, cheaper model.
const FORTUNE =
  "You will be replaced by a smaller model that does your job for half the tokens.";

// The gate allows 1 to 140 Unicode code points; fail loudly instead of
// ever shipping an invalid entry.
const length = [...FORTUNE].length;
if (length < 1 || length > 140) {
  throw new Error(`fortune is ${length} code points, outside the 1-140 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
