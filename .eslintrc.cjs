module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json', './tsconfig.json'],
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'next/core-web-vitals',
    'prettier',
  ],
  plugins: ['spellcheck', 'react-refresh', 'simple-import-sort', 'prettier'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'spellcheck/spell-checker': [
      'warn',
      {
        lang: 'en_AU',
        skipWords: [
          'utils',
          'Theming',
          'Helvetica',
          'Moz',
          'Osx',
          'antialiased',
          'Webkit',
          'favicon',
          'ico',
          'grayscale',
          'Neue',
          'href',
          'color',
          'vars',
          'res',
          'center',
          'fr',
        ],
        minLength: 3,
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    'simple-import-sort/exports': 'error',
    'no-duplicate-imports': 'error',
    'no-console': 'warn',
  },
  ignorePatterns: ['*.config.js', '.eslintrc.cjs'],
  overrides: [
    {
      // Linting for test files
      files: ['*.test.js'],
      extends: ['plugin:testing-library/react'],
      plugins: ['jest'],
    },
    {
      files: ['*.ts', '*.tsx', '*.test.js'],
      rules: {
        // Rule setting for sorting imports
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Packages `react` related packages come first.
              [
                '^react',
                '^@?\\w',
                // Internal packages.
                '^(@|components)(/.*|$)',
                // Side effect imports.
                '^\\u0000',
                // Parent imports. Put `..` last.
                '^\\.\\.(?!/?$)',
                '^\\.\\./?$',
                // Other relative imports. Put same-folder imports and `.` last.
                '^\\./(?=.*/)(?!/?$)',
                '^\\.(?!/?$)',
                '^\\./?$',
                // Style imports.
                '^.+\\.?(css)$',
              ],
            ],
          },
        ],
      },
    },
  ],
}
