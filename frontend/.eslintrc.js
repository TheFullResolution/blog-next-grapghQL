module.exports = {
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {},
  settings: {
    react: {
      version: 'detect',
    },
  },
}
