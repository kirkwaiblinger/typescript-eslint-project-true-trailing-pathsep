# typescript-eslint `project: true` with trailing pathsep in `tsconfigRootDir` reproduction

## steps

1. `npm i`
1. `npm run lint`. Observe error.

Try this with and without the trailing `path.sep` in `eslint.config.js`.