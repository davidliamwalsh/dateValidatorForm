const puppeteer = require('puppeteer');

test("missing string date input", async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:8080')

  await page.click('#dateInput')
  await page.type('#dateInput', '')
  await page.click('#submitBtn')

  // await page.screenshot({path: 'form-noString.png'})

  const message = await page.$eval('[data-test=alertMessage]', el => el.textContent)

  expect(message).toEqual('Valid date is required')
  expect(message).not.toEqual('Valid date')
})