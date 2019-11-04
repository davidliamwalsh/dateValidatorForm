const puppeteer = require('puppeteer');

test("non historical date", async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:8080')

  await page.click('#dateInput')
  await page.type('#dateInput', '26/22/1985')
  await page.click('#submitBtn')

  // await page.screenshot({path: 'form-incorrectDate.png'})

  const message = await page.$eval('[data-test=alertMessage]', el => el.textContent)

  expect(message).toEqual('Valid date is required')
  expect(message).not.toEqual('Valid date')
})