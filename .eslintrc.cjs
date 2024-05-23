module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'server.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-refresh', '@typescript-eslint', 'simple-import-sort'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 0,
    'no-restricted-exports': 0,
    'arrow-parens': ['error', 'as-needed'],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/consistent-type-definitions': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-floating-promises': 0,
    'react-hooks/exhaustive-deps': 1,
    'react/prop-types': 0
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^react', '^@?\\w'],
              ['^@app'],
              ['^\\.']
            ]
          }
        ]
      }
    }
  ],
}
