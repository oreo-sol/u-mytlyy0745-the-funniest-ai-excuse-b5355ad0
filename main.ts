import { mkdirSync, writeFileSync } from "node:fs";

const PART_A = "I found the bug, fixed it, then kept fixing the fix ";
const PART_B = "until the original bug got lonely and came back.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PART_A + PART_B, "utf8");
