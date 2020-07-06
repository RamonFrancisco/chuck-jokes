module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'prettier/prettier': ["error", { "singleQuote": true, "parser": "flow" }],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'operator-linebreak': ["error", "after"],
    "no-useless-escape": "off",
    'no-underscore-dangle': 0,
    "import/imports-first": ["error", "absolute-first"],
    'import/newline-after-import': 'error',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/forbid-prop-types': 'off'
  },
};
