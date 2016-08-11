import merge from 'deepmerge'

import BestPractices from './rules/best-practices'
import Errors from './rules/errors'
import ES6 from './rules/es6'
import Mocha from './rules/mocha'
import Promises from './rules/promises'
import Strict from './rules/strict'
import Style from './rules/style'
import Variables from './rules/variables'

const baseConfig = {
  'env': {
    'browser': true,
    'node': true
  }
}

const config = [
  BestPractices,
  Errors,
  ES6,
  Strict,
  Style,
  Variables,
  Promises,
  Mocha
].reduce((prev, cur) => {
  return merge(prev, cur)
}, baseConfig)

export default config
