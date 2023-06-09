module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'max-classes-per-file': 0,
    'no-unused-vars': 0,
    'no-plusplus': 0,
    'no-alert': 0,
    'no-restricted-globals': 0,
    'import/extensions': 0,
  },
};
