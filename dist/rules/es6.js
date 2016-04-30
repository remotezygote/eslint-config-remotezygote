'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'env': {
    'es6': true
  },
  'parser': 'babel-eslint',
  'rules': {
    // Require parens in arrow function arguments.
    'arrow-parens': 'error',

    // Require space before/after arrow function's arrow.
    'arrow-spacing': 'error',

    // Disallow modifying variables of class declarations.
    'no-class-assign': 'error',

    // Disallow modifying variables that are declared using const.
    'no-const-assign': 'error',

    // Disallow duplicate name in class members.
    'no-dupe-class-members': 'error',

    // Warns on use of var instead of es6 let or const.
    'no-var': 'warn'
  }
};