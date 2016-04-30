'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'rules': {
    // Do not require all methods to return a value.
    'consistent-return': 'off',

    // Blocks require curly braces.
    'curly': ['error', 'all'],

    // Encourages use of dot notation whenever possible.
    'dot-notation': ['error', { 'allowKeywords': true }],

    // Enforces consistent newlines after dots.
    'dot-location': ['error', 'property'],

    // Enforce use of type-safe equality operators.
    'eqeqeq': ['error', 'smart'],

    // Make sure for-in loops have an if statement.
    'guard-for-in': 'error',

    // Error on use of alert. It's a bad UX practice.
    'no-alert': 'error',

    // Disallow use of arguments.caller or arguments.callee.
    'no-caller': 'error',

    // Disallow else after a return in an if.
    'no-else-return': 'warn',

    // Disallow use of labels for anything other than loops and switches.
    'no-labels': 'error',

    // No eval. It is potentially dangerous.
    'no-eval': 'error',

    // Disallow extending native objects.
    'no-extend-native': 'error',

    // Disallow unnecessary function binding.
    'no-extra-bind': 'error',

    // Disallow fallthrough of case statements.
    'no-fallthrough': 'error',

    // Disallow use of eval()-like methods.
    'no-implied-eval': 'error',

    // Disallow usage of __iterator__ property.
    'no-iterator': 'error',

    // Disallow unnecessary nested blocks.
    'no-lone-blocks': 'error',

    // Disallow creation of functions within loops.
    'no-loop-func': 'error',

    // Disallow use of multiple spaces
    'no-multi-spaces': 'error',

    // Disallow use of multiline strings
    'no-multi-str': 'error',

    // Error on reassigning native objects.
    'no-native-reassign': 'error',

    // Disallow use of the new operator when not part of an assignment or comparison.
    'no-new': 'error',

    // Disallow use of new operator for Function object.
    'no-new-func': 'error',

    // Disallows creating new instances of String, Number, and Boolean.
    'no-new-wrappers': 'error',

    // Disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    'no-octal-escape': 'error',

    // Disallow usage of __proto__ property.
    'no-proto': 'error',

    // Disallow declaring the same variable more than once.
    'no-redeclare': 'error',

    // Disallow use of assignment in return statement.
    'no-return-assign': 'error',

    // Disallow use of javascript: urls.
    'no-script-url': 'error',

    // Disallow use of the comma operator.
    'no-sequences': 'error',

    // Disallow space between function identifier and application.
    'no-spaced-func': 'error',

    // Disallow trailing whitespace at the end of lines.
    'no-trailing-spaces': 'error',

    // Disallow usage of expressions in statement position.
    'no-unused-expressions': 'error',

    // Allow TODOs. Consider setting to warning when production ready.
    'no-warning-comments': 'off',

    // Disallow use of the with statement.
    'no-with': 'error',

    // Disallow Yoda conditions.
    'yoda': ['error', 'never']
  }
};