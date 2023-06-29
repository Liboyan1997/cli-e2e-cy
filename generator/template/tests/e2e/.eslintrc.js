module.exports = {
  //取消eslint 报错
  plugins: [
    'cypress'
  ],
  env: {
    mocha: true,
    'cypress/globals': true
  },
  rules: {
    strict: 'off'
  }
}
