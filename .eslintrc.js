module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:vue/strongly-recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    curly: ['error', 'multi'],
    indent: ['warn', 2],
    'array-callback-return': ['off', { allowImplicit: true }],
    'no-return-assign': ['off'],
    'no-unused-expressions': ['off', { allowShortCircuit: true, allowTernary: true }],
    'no-sequences': ['off'],
    'import/no-named-as-default': ['off'],
    'vue/multi-word-component-names': ['off'],
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 1
      },
      'multiline': {
        'max': 1
      }
    }]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
