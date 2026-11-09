/**
 * Root entry for local-directory loading.
 *
 * OpenCode loads a configured local path by looking for the directory's
 * `index` or `server` module — a path to a single file, or a directory
 * without one, is skipped. The published package resolves through
 * `package.json` `exports` (`./dist/index.js`); this root module is the
 * equivalent seam for `"package": "/path/to/checkout"`, re-exporting the same
 * default plugin definition so local and published loading are identical.
 */
export { default } from "./src/index.ts"
