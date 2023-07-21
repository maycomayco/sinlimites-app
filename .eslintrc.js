module.exports = {
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
  rules: {
    'no-unused-vars': 'error',
    'no-console': 'warn',
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        trailingComma: 'all',
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        arrowParens: 'always',
        endOfLine: 'auto',
        plugins: ['prettier-plugin-tailwindcss'],
        pluginSearchDirs: false,
      },
    ],
    'import/order': [
      'warn',
      {
        groups: [
          'type',
          'builtin',
          'object',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern: '~/**',
            group: 'external',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
      },
    ],
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: ['return', 'export'] },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
    'react/self-closing-comp': 'warn',
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
}
