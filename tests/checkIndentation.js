const cp = require('child_process');

cp.exec(`yarn eslint --rule 'indent: ["error", 2]' index.js pages/detail-page.js`, (stdout, stderr) => {
  console.log(stderr)
})
