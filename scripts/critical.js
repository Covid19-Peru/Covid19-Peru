/*const critical = require('critical');

//require('../config/env');

critical.generate({
    base: 'build/',
    src: './index.html',
    dest: './indexCritical.html',
  }, (err, output) => {
    if (err) {
      console.log("ESTE ES EL ERROR");
      console.error(err);
    } else if (output) {
      console.log('Generated critical CSS');
    }
  });*/

const puppeteer = require('puppeteer')
const URL = process.env.URL || 'https://www.fotocasa.es/es'
;(async () => {
  const browser = await puppeteer.launch({ headless:true })
  const page = await browser.newPage()

  await page.coverage.startCSSCoverage()
  await page.goto(URL , {waitUntil: 'load'})

  const cssCoverage = await page.coverage.stopCSSCoverage()
  let criticalCSS = ''
  for(const entry of cssCoverage){
    for(const range of entry.ranges){
      criticalCSS += entry.text.slice(range.start,range.end) + "\n"
    }
  }
  console.log("hi")
  console.log(criticalCSS)

  await page.close()
  await browser.close()

})()