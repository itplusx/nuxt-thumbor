module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: [
    '@nuxtjs',
    '@itplusx/eslint-config/vuejs'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {}
}
