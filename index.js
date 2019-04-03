const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.setViewport({width: 1000, height: 500});
  await page.goto('http://tssdevs.com');
  await page.screenshot({path: 'example.png'});


  // let html = await page.content();

  await browser.close();
})();