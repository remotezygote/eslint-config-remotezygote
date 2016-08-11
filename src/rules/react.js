export default {
  plugins: [
    'react'
  ],
  extends: [
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  rules: {
    // Prevent missing displayName in a React component definition.
    // Also accepts name automatically assigned by transpiler.
    'react/display-name': ['warn', {
      'ignoreTranspilerName': false
    }],

    'react/jsx-uses-vars': 'error',

    // Must specify boolean attrs.
    'react/jsx-boolean-value': ['warn', 'always'],

    // Require closing brackets be positioned after props.
    'react/jsx-closing-bracket-location': ['warn', {
      'selfClosing': 'after-props',
      'nonEmpty': 'after-props'
    }],

    // Validate props indentation in JSX.
    'react/jsx-indent-props': ['warn', 2],

    // Maximum of 2 props per line.
    'react/jsx-max-props-per-line': ['warn', {
      'maximum': 2
    }],

    // Prevent duplicate props in JSX.
    'react/jsx-no-duplicate-props': 'error',

    // Disallow undeclared variables in JSX.
    'react/jsx-no-undef': 'warn',

    // Prevent usage of unknown DOM property.
    'react/no-unknown-property': 'warn',

    // Prevent missing props validation in a React component definition.
    'react/prop-types': 'warn',

    // Enforce propTypes declarations alphabetical sorting.
    'react/sort-prop-types': ['warn', {
      'ignoreCase': true
    }],

    // Allow React var to be unused even when no-unused-vars is on
    'react/jsx-uses-react': 'warn',

    // Enforce component methods order.
    'react/sort-comp': ['warn', {
      'order': [
        'lifecycle',
        'everything-else',
        'render'
      ],
      'groups': {
        'lifecycle': [
          'displayName',
          'propTypes',
          'defaultProps',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'state',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount'
        ]
      }
    }]
  }
}
