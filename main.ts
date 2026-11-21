// Writes one one-line joke about working beside AI coding agents to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My AI coding agent crashed the live demo, then handled it like every failing test: it mocked the audience.";

const OUT_DIR = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, JOKE, "utf8");
console.log(JOKE);
