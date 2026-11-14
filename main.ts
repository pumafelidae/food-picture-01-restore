// food-picture-01 restore: emit the original entry image.
// Node 22, stdlib only. The image itself is the entry; this program
// just places it where the harness expects it, byte for byte.
import { copyFileSync, chmodSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const target = join(outDir, "entry.png");

// Copy the image to the output location.
// The restore re-emits the original entry image unchanged.
copyFileSync(source, target);

// copyFileSync preserves the source file's mode, which the grader
// cannot read, so force the output to be world-readable.
chmodSync(target, 0o644);
