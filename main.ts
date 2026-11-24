import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I found the bug, fixed it, then kept fixing the fix until the original bug got lonely and came back.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
