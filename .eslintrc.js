module.exports = {
  env: { browser: true, es6: true, commonjs: true },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: { ecmaVersion: 2018 },
  plugins: ["prettier", "html"],
  rules: {
    "prettier/prettier": ["error", { semi: false, printWidth: 100, parser: "babel" }],
    "comma-dangle": ["error", "never"]
  }
}
