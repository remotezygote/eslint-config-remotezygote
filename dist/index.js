'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _bestPractices = require('./rules/best-practices');

var _bestPractices2 = _interopRequireDefault(_bestPractices);

var _errors = require('./rules/errors');

var _errors2 = _interopRequireDefault(_errors);

var _es = require('./rules/es6');

var _es2 = _interopRequireDefault(_es);

var _mocha = require('./rules/mocha');

var _mocha2 = _interopRequireDefault(_mocha);

var _production = require('./rules/production');

var _production2 = _interopRequireDefault(_production);

var _promises = require('./rules/promises');

var _promises2 = _interopRequireDefault(_promises);

var _react = require('./rules/react');

var _react2 = _interopRequireDefault(_react);

var _strict = require('./rules/strict');

var _strict2 = _interopRequireDefault(_strict);

var _style = require('./rules/style');

var _style2 = _interopRequireDefault(_style);

var _variables = require('./rules/variables');

var _variables2 = _interopRequireDefault(_variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseConfig = {
  env: {
    'browser': true,
    'node': true
  }
};

var config = [_bestPractices2.default, _errors2.default, _es2.default, _react2.default, _strict2.default, _style2.default, _variables2.default, _promises2.default, _mocha2.default].reduce(function (prev, cur) {
  return (0, _deepmerge2.default)(prev, cur);
}, baseConfig);

if (process.env.NODE_ENV === 'production') {
  config = (0, _deepmerge2.default)(config, _production2.default);
}

exports.default = config;