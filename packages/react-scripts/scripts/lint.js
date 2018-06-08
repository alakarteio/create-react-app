'use strict'

const { CLIEngine } = require('eslint')
const paths = require('../config/paths')

var cli = new CLIEngine({
  extensions: ['.js', '.jsx'],
  useEslintrc: true,
  fix: true,
  baseConfig: {
    parser: 'babel-eslint',
    extends: ['airbnb'],
    plugins: ['babel', 'cypress'],
    rules: {
      semi: [2, 'never'],
      'arrow-body-style': 0,
      'import/prefer-default-export': 0,
      'react/forbid-prop-types': 0,
      'import/no-extraneous-dependencies': 0,
      'import/no-unresolved': 0,
      'import/extensions': 0,
      'func-names': 0,
      'jsx-a11y/no-static-element-interactions': 0,
      'jsx-a11y/click-events-have-key-events': 0,
      'jsx-a11y/no-noninteractive-element-interactions': 0,
      'jsx-a11y/label-has-for': 0,
      'jsx-a11y/anchor-is-valid': 0,
      'react/no-danger': 0,
      'max-len': [2, 200],
    },
  },
})

// lint myfile.js and all files in lib/
var report = cli.executeOnFiles([paths.appSrc])

// get the default formatter
var formatter = cli.getFormatter()

// output to console
CLIEngine.outputFixes(report)
console.log(formatter(report.results))
