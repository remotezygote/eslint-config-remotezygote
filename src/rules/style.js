export default {
  rules: {
    // Enforce spacing inside array brackets.
    'array-bracket-spacing': ['error', 'never'],

    // Enforce one true brace style.
    'brace-style': ['error', '1tbs', {
      'allowSingleLine': true
    }],

    // Use camelcase for variable names. Ignore property names.
    'camelcase': ['error', {
      'properties': 'never'
    }],

    // Enforce spacing after comma.
    'comma-spacing': ['error', {
      'before': false,
      'after': true
    }],

    // Enforces comma style. Requires that the comma be placed after and be in
    // the same line as the variable declaration, object property and array element.
    'comma-style': ['error', 'last'],

    // Use 'self' as var name when capturing 'this'.
    'consistent-this': ['off', 'self'],

    // Enforce newline at the end of file, with no multiple empty lines.
    'eol-last': 'error',

    // Indent using two spaces.
    'indent': ['error', 2, {
      'SwitchCase': 1
    }],

    // Enforce spacing between keys and values in object literal properties.
    'key-spacing': ['error', {
      'beforeColon': false,
      'afterColon': true
    }],

    // The maximum depth that blocks can be nested.
    'max-depth': ['error', 4],

    // Disallow the omission of parentheses when invoking a constructor with no arguments.
    'new-parens': 'error',

    // Disallow use of the Array constructor.
    'no-array-constructor': 'error',

    // Disallow the use of the Object constructor.
    'no-new-object': 'error',

    // Warn on line length greater than 80 characters.
    'max-len': ['warn', 80, 4, {
      'ignoreComments': true,
      'ignoreUrls': true,

      // Ignore imports and requires
      'ignorePattern': '(^\\s*import.+;$)|(^\\s*let.+require.+;$)'
    }],

    // Require constructors to use initial caps.
    'new-cap': ['error', {
      'capIsNewExceptions': [
        'Immutable.List',
        'Immutable.OrderedMap',
        'Immutable.Map'
      ]
    }],

    // Disallow if as the only statement in an else block.
    'no-lonely-if': 'error',

    // Disallow multiple empty lines.
    'no-multiple-empty-lines': 'error',

    // Disallow nested ternary expressions.
    'no-nested-ternary': 'error',

    // Disallow space between function identifier and application.
    'no-spaced-func': 'error',

    // Disallow trailing whitespace at the end of lines.
    'no-trailing-spaces': 'error',

    // Allow dangling underscore for private variable identification.
    'no-underscore-dangle': 'off',

    // Require use of semicolons.
    'semi': ['warn', 'never'],

    // Enforce spacing before and after semicolons.
    'semi-spacing': ['error', {
      'before': false,
      'after': true
    }],

    // Require a space after certain keywords.
    'keyword-spacing': 'error',

    // Require or disallow a space before blocks.
    'space-before-blocks': 'error',

    // Disallow spaces inside parens
    'space-in-parens': ['error', 'never'],

    // Require spaces around operators.
    'space-infix-ops': 'error',

    // Require spaces after word-based unary operators.
    'space-unary-ops': ['error', {
      'words': true,
      'nonwords': false
    }],

    // Use single quotes for strings.
    'quotes': ['warn', 'single', 'avoid-escape'],

    // Prefer const over let when possible
    'prefer-const': 'warn',

    // Prefer object shorthand when possible
    'object-shorthand': 'warn'
  }
}
