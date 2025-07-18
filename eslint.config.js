import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import path from 'path';

export default defineConfig(
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        // try with and without trailing path.sep.
        tsconfigRootDir: import.meta.dirname + path.sep,
        // tsconfigRootDir: import.meta.dirname
      }
    }
  }
)