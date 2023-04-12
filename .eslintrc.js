module.exports = {
  root: true,
  env: { browser: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended", // eslint-plugin-react
    "plugin:react/jsx-runtime", // react
    "plugin:react-hooks/recommended", // eslint-plugin-react-hooks
    "plugin:import/recommended", // eslint-plugin-import
    "plugin:import/typescript", // eslint-plugin-import eslint-import-resolver-typescript
    "plugin:prettier/recommended", // eslint-plugin-prettier
  ],
  plugins: [
    "@typescript-eslint", // @typescript-eslint/eslint-plugin
    "react", // eslint-plugin-react
    "react-hooks", // eslint-plugin-react-hooks
    "import", // eslint-plugin-import
    "simple-import-sort", // eslint-plugin-simple-import-sort
    "prettier", // eslint-plugin-prettier
  ],
  parser: "@typescript-eslint/parser", // @typescript-eslint/eslint-plugin
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // eslint-plugin-react
    },
  },
  rules: {
    "simple-import-sort/imports": "error", // eslint-plugin-simple-import-sort
    "simple-import-sort/exports": "error", // eslint-plugin-simple-import-sort
    "react-hooks/rules-of-hooks": "error", // eslint-plugin-react-hooks
    "react-hooks/exhaustive-deps": "warn", // eslint-plugin-react-hooks
    "prettier/prettier": "error", // eslint-plugin-prettier
    "react/jsx-uses-react": "error", // eslint-plugin-react
    "react/jsx-uses-vars": "error", // eslint-plugin-react
    "import/no-unresolved": "error", // eslint-plugin-import
    "import/default": "warn", // eslint-plugin-import
  },
  settings: {
    "import/resolver": {
      // eslint-plugin-import
      typescript: true,
      node: true,
    },
    react: {
      // eslint-plugin-react
      version: "detect",
    },
  },
  ignorePatterns: ["node_modules/", "dist/", "build/", "coverage/", "public/"],
}
