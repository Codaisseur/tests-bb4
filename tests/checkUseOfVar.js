const cp = require('child_process');

cp.exec(`yarn eslint --rule 'no-var: ["error"]' index.js pages/detail-page.js`, (stdout, stderr) => {
  console.log(stderr)
})
