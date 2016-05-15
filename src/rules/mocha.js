export default {
  env: {
    mocha: true
  },
  plugins: [
    'mocha'
  ],
  rules: {
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-skipped-tests': 'error',
    'mocha/no-pending-tests': 'warn',
    'mocha/handle-done-callback': 'error',
    'mocha/no-synchronous-tests': 'off',
    'mocha/no-global-tests': 'error'
  }
}
