import { mkdirSync, writeFileSync } from "node:fs";

// Winner D8 (89 chars, 24/25 of 16 drafts): three beats, each lands —
// the excuse (two approvals), the reveal (both were mine), the punch
// (two GitHub accounts). Exact dev jargon, fresh self-approval twist,
// and shorter than the tied D9 (96 chars), so it wins the tie-break.
const TEXT =
  "I merged it because the PR had two approvals. Both were mine. I have two GitHub accounts.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
