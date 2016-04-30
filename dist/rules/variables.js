'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'rules': {
    // Disallow the catch clause parameter name being the same as a variable in the outer scope.
    'no-catch-shadow': 'error',

    // Disallow labels that share a name with a variable.
    'no-label-var': 'error',

    // Disallow declaration of variables already declared in the outer scope.
    'no-shadow': 'error',

    // Disallow shadowing of names such as arguments.
    'no-shadow-restricted-names': 'error',

    // Disallow use of undefined when initializing variables.
    'no-undef-init': 'error',

    // Warn on unused variables.
    'no-unused-vars': ['warn', { 'vars': 'all', 'args': 'after-used' }],

    // Error if variables are used before they are defined.
    'no-use-before-define': ['error', 'nofunc']
  }
};