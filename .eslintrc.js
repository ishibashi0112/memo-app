module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  parserOptions: {
    sourceType: "module",
  },
  plugins: [],
  rules: {
    "no-var": "error",
    "react/prop-types": "off",
    "no-undef": "error",
    "jsx-a11y/anchor-is-valid": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
