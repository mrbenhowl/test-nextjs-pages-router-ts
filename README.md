Goals

- [x] Add SSR page
- [ ] Unit test SSR page with mocking
- [ ] Add client side API call
- [ ] Unit test client side component with mocking
- [x] integrate vanilla-extract (global)
- [x] integrate vanilla-extract (component)
- [ ] Add theme file for vanilla-extract and use in global and component level
- [ ] unit test with vanilla-extract
- [x] add a theme for using vanilla-extract
- [ ] add playwright for e2e
- [ ] add code coverage report
- [ ] auth / rerouting if not logged-in
- [x] play with mockoon

# Steps

## Vanilla-extract

- pnpm add -D @vanilla-extract/babel-plugin @vanilla-extract/css @vanilla-extract/next-plugin @vanilla-extract/webpack-plugin

## Mountebank

- pnpm add -D mountebank
- Add mock command to package.json
  - "mock": "mb --configfile mocks/imposters.ejs --loglevel debug"
- Add mocks directory
  imposters
  sampleImposter.ejs
  stubs
  sampleStub.json
  imposters.ejs

## Mockoon

- Download desktop app <https://mockoon.com/>
- <https://mockoon.com/docs/latest/cors/#automatic-handling-of-cors-preflight-requests>
- <https://mockoon.com/docs/latest/cors/#add-cors-headers-to-the-environment-headers>
- <https://mockoon.com/tutorials/run-mock-api-anywhere-cli/>

## jest

- pnpm add -D identity-obj-proxy
- pnpm add -D jest @testing-library/react @testing-library/jest-dom @testing-library/jest-dom jest-environment-jsdom

## eslint

- **Add TypeScript support**

  Add `@typescript-eslint/parser`. This allows ESLint to understand TypeScript syntax.

  ```bash
  npm i --save-dev @typescript-eslint/parser
  pnpm add -D @typescript-eslint/parser
  ```

  Then add it to `parser` in `.eslintrc.cjs`:

  ```json
  {
    "parser": "@typescript-eslint/parser"
  }
  ```

  Use the `parserOptions` property to add the following:

  - `project`: This tells ESLint to use the TypeScript project defined in `tsconfig.json`.
  - `tsconfigRootDir`: This tells ESLint where to find the `tsconfig.json` file.

    ```json
    {
      "parserOptions": {
        "project": "./tsconfig.json",
        "tsconfigRootDir": "."
      }
    }
    ```

- **Add recommended configuration sets**: Use the `extends` property to add

  - `eslint:recommended`: ESLint's built-in recommended ruleset.
  - `plugin:@typescript-eslint/recommended`: Recommended rules from the TypeScript plugin.
  - `plugin:@typescript-eslint/recommended-requiring-type-checking`: An additional ruleset from the TypeScript plugin that requires type checking.
  - `prettier`: This disables all formatting rules that might conflict with Prettier. This comes from installing `eslint-config-prettier`, see [this video](https://www.youtube.com/watch?v=Cd-gBxzcsdA) for more info.

    ```bash
            npm i -D eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-refresh eslint-plugin-simple-import-sort @typescript-eslint/eslint-plugin
            pnpm add -D eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-refresh eslint-plugin-simple-import-sort @typescript-eslint/eslint-plugin
    ```

    Then add it to `extends` in `.eslintrc.cjs`:

    ```json
    {
      "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier"
      ]
    }
    ```

- **Add these plugins to enhance developer experience even further**

  - `eslint-plugin-spellcheck`: Spellcheck your code. [see docs](https://www.npmjs.com/package/eslint-plugin-spellcheck)
  - `eslint-plugin-simple-import-sort`: Sort your imports automatically. [see docs](https://www.npmjs.com/package/eslint-plugin-simple-import-sort)

    ```bash
    npm i -D eslint-plugin-spellcheck eslint-plugin-simple-import-sort
    pnpm add -D eslint-plugin-spellcheck eslint-plugin-simple-import-sort
    ```

    Then add it to `plugins` in `.eslintrc.cjs`:

    ```json
    {
      "plugins": ["spellcheck", "simple-import-sort"]
    }
    ```
