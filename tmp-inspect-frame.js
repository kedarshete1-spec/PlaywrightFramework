const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://letcode.in/frame');
  console.log('Page title:', await page.title());
  console.log('All frames:');
  for (const frame of page.frames()) {
    console.log('  name=', JSON.stringify(frame.name()), 'url=', frame.url());
    const html = await frame.content();
    if (html.includes('Click Me') || html.includes('sampleHeading') || html.includes('firstFr')) {
      console.log('  contains Click Me or sampleHeading or firstFr');
    }
  }
  const iframe = await page.#firstFr;
  console.log('#firstFr exists?', !!iframe);
  if (iframe) {
    console.log('  src=', await iframe.getAttribute('src'));
    console.log('  frame outerHTML snippet:', (await iframe.evaluate(el => el.outerHTML)).slice(0, 400));
  }
  const firstFr = page.frame({ name: 'firstFr' });
  console.log('firstFr frame object found?', !!firstFr);
  if (firstFr) {
    console.log('firstFr content length:', (await firstFr.content()).length);
    const firstFrHtml = await firstFr.content();
    const iframeMatch = firstFrHtml.match(/<iframe[^>]*>/i);
    console.log('firstFr includes iframe tag?', !!iframeMatch, iframeMatch ? iframeMatch[0] : 'none');
    console.log('firstFr has Click Me directly?', await firstFr.locator('button', { hasText: 'Click Me' }).count());
    console.log('firstFr has sampleHeading directly?', await firstFr.locator('#sampleHeading').count());
    console.log('firstFr child frame count:', firstFr.childFrames().length);
    for (const child of firstFr.childFrames()) {
      console.log('  child frame name=', JSON.stringify(child.name()), 'url=', child.url());
      console.log('  child button count=', await child.locator('button', { hasText: 'Click Me' }).count());
      console.log('  child #sampleHeading count=', await child.locator('#sampleHeading').count());
      console.log('  child text snippet:', (await child.content()).slice(0, 200));
    }
  }
  await browser.close();
})();
