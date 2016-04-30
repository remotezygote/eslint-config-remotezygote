export default {
  'rules': {
    // Disallow trailing commas.
    'comma-dangle': 'error',

    // Disallow assignment in conditional expressions.
    'no-cond-assign': 'error',

    // Disallow use of constant expressions in conditions.
    'no-constant-condition': 'error',

    // Warn on console (e.g. console.log).
    'no-console': 'warn',

    // Disallow control characters in regular expressions.
    'no-control-regex': 'error',

    // Warn on use of debugger statement.
    'no-debugger': 'warn',

    // Disallow duplicate arguments in functions.
    'no-dupe-args': 'error',

    // Disallow duplicate keys when creating object literals.
    'no-dupe-keys': 'error',

    // Disallow empty statements.
    'no-empty': 'warn',

    // Disallow the use of empty character classes in regular expressions.
    'no-empty-character-class': 'error',

    // Disallow assigning to the exception in a catch block.
    'no-ex-assign': 'error',

    // Disallow double-negation boolean casts in a boolean context.
    'no-extra-boolean-cast': 'error',

    // Disallow a duplicate case label.
    'no-duplicate-case': 'error',

    // Disallow unnecessary parentheses.
    'no-extra-parens': ['error', 'functions'],

    // Error on unnecessary semicolons.
    'no-extra-semi': 'error',

    // Disallow overwriting functions written as function declarations.
    'no-func-assign': 'error',

    // Disallow invalid regular expression strings in the RegExp constructor.
    'no-invalid-regexp': 'error',

    // Error on irregular whitespace outside of strings and comments.
    'no-irregular-whitespace': 'error',

    // Error on unreachable statements.
    'no-unreachable': 'error',

    // Ensure that the results of typeof are compared against a valid string.
    'valid-typeof': 'error'
  }
}
