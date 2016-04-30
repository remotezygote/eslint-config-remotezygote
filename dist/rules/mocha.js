'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'env': {
    'mocha': true
  },
  'rules': {
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-skipped-tests': 'error',
    'mocha/no-pending-tests': 'warn',
    'mocha/handle-done-callback': 'error',
    'mocha/no-synchronous-tests': 'off',
    'mocha/no-global-tests': 'error'
  }
};