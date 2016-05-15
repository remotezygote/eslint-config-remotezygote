'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  plugins: ['promise'],
  rules: {
    'promise/param-names': 'warn',
    'promise/always-return': 'warn',
    'promise/catch-or-return': 'warn'
  }
};
module.exports = exports['default'];