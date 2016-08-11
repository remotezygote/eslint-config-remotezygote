import merge from 'deepmerge'

import BestPractices from './rules/best-practices'
import Errors from './rules/errors'
import ES6 from './rules/es6'
import Mocha from './rules/mocha'
import Production from './rules/production'
import Promises from './rules/promises'
import React from './rules/react'
import Strict from './rules/strict'
import Style from './rules/style'
import Variables from './rules/variables'

const baseConfig = {
  'extends': [
    'eslint:recommended'
  ],
  'env': {
    'browser': true,
    'node': true
  }
}

let config = [
  BestPractices,
  Errors,
  ES6,
  React,
  Strict,
  Style,
  Variables,
  Promises
].reduce((prev, cur) => {
  return merge(prev, cur)
}, baseConfig)

if (process.env.NODE_ENV === 'production') {
  config = merge(config, Production)
}

export default config
