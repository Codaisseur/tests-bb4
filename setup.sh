yarn init -y; 
yarn add html5-validator stylelint jest codeceptjs puppeteer eslint eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node; 
touch .stylelintIgnore; 
touch .stylelintrc.json;
touch .eslintrc;
touch .eslintignore;
touch codecept.conf.js;
touch steps_file.js;

echo 'check_logic\npackage.json\nyarn-error.log' >> .stylelintIgnore;
echo '{ "rules": {"at-rule-no-unknown": true, "at-rule-semicolon-newline-after": "always", "block-no-empty": true, "block-opening-brace-newline-after": "always", "color-no-invalid-hex": true, "comment-no-empty": true, "declaration-block-no-duplicate-properties": true, "declaration-block-no-shorthand-property-overrides": true, "font-family-no-duplicate-names": true, "font-family-no-missing-generic-family-keyword": true, "no-duplicate-selectors": true, "no-empty-source": true, "no-extra-semicolons": true, "color-no-invalid-hex": true } }' >> .stylelintrc.json
echo '{
    "parserOptions": {
        "ecmaVersion": 2017
    },
    "env": {
        "es6": true
    }
}' >> .eslintrc
echo '/check_logic/
/node_modules/
package.json
tsconfig.json
yarn.lock
codeceptjs.conf.js
steps_file.js' >> .eslintignore

echo "exports.config = { tests: './check_logic/tests/codeceptjs/*.test.js', output: './output', helpers: { Puppeteer: { url: 'http://localhost', chrome:{args: ['--no-sandbox']} }}, include: { I: './steps_file.js' }, bootstrap: null, mocha: {}, name: 'bb-day-3'}" >> codecept.conf.js
echo 'module.exports = function() {return actor({});}' >> steps_file.js
