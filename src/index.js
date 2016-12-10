import merge from 'deepmerge'

const rulesFiles = require.context('./rules', true, /\.js$/)

const ruleSet = rulesFiles.keys().reduce((prev, cur) => {
  const thisRules = rulesFiles(cur).default
  const out = merge(prev, thisRules)
  return out
}, {})

const fullConfig = merge({
  env: {
    'browser': true,
    'node': true
  }
}, ruleSet)

export const env = fullConfig.env
const extensions = fullConfig.extends
export { extensions as extends }
export const rules = fullConfig.rules
export const parser = fullConfig.parser
export const parserOptions = fullConfig.parserOptions
export const plugins = fullConfig.plugins
