const stylelint = require('stylelint')

const formatSourceName = (path) => {
  const parts = path.split('/')
  return parts[parts.length - 1]
}

stylelint.lint({
  config: {
    rules: {
      'at-rule-no-unknown': true,
      'at-rule-semicolon-newline-after': 'always',
      'block-no-empty': true,
      'block-opening-brace-newline-after': 'always',
      'color-no-invalid-hex': true,
      'comment-no-empty': true,
      'declaration-block-no-duplicate-properties': true,
      'declaration-block-no-shorthand-property-overrides': true,
      'font-family-no-duplicate-names': true,
      'font-family-no-missing-generic-family-keyword': true,
      'no-duplicate-selectors': true,
      'no-empty-source': true,
      'no-extra-semicolons': true
    }
  },
  files: '**/*.css'
})
  .then(function (data) {
    if (data.errored) {
      const output = JSON.parse(data.output)

      output.map(res => {
        if (res.warnings.length > 0) {
          console.log(`\n\nError at ${formatSourceName(res.source)}\n`)
          res.warnings.map(warning => console.log(`${warning.text}\n`))
        }
      })
    } else {
      console.log('Well done!')
    }
    return data.errored
  })
  .then(err => err ? process.exit(1) : process.exit(0))
  .catch(function (err) {
    console.error(err.stack)
  })
