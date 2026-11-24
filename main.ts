// news-image-20261124 entry (Node 22, standard library only).
// The image is entry.png beside this file; the program copies it to the
// output directory the grader provides. Deterministic by construction:
// the same bytes are copied on every run, and no network is used.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(here, 'entry.png');
const target = join(outDir, 'entry.png');

// The output directory may not exist yet when the grader runs the
// program, so create it first; then copy the image verbatim.
function publish(): void {
  mkdirSync(outDir, { recursive: true });
  copyFileSync(source, target);
}

publish();
