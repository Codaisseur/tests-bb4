const cp = require('child_process')
const pwd = cp.execSync('pwd', { encoding: 'utf8' })
const assert = require('assert')

Feature('Render from array');

Scenario('Visit index page', async(I) => {
  I.amOnPage(`file://${pwd}/index.html`);
  let altAttributesOfImages =  await I.grabAttributeFrom('img', 'alt')

  assert(altAttributesOfImages.includes(
    `Een vrolijke vioolspeler` &&
    `Een molen aan een poldervaart, bekend als ‘In de maand juli’` &&
    `Schutters van wijk II onder leiding van kapitein Frans Banninck Cocq, bekend als de ‘Nachtwacht’` &&
    `Eenden` &&
    `Orpheus en de dieren` &&
    `Een schrijver die zijn pen versnijdt` &&
    `Eendennesten` &&
    `Vanitas stilleven` &&
    `De Sint-Elisabethsvloed` &&
    `Het ponteveer` 
  ))
});
