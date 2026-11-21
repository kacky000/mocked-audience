// Writes one one-line joke about working beside AI coding agents to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "The live demo crashed, so my AI coding agent compacted its context and summed up the last hour in one line: \"User seems upset.\"";

const OUT_DIR = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, JOKE, "utf8");
console.log(JOKE);
