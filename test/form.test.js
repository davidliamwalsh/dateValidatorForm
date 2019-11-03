const puppeteer = require('puppeteer');

test("correct input for date", async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:8080')

  await page.click('#dateInput')
  await page.type('#dateInput', '26/12/1985')
  await page.click('#submitBtn')

  await page.screenshot({path: 'form.png'})
})

test("missing string date input", async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:8080')

  await page.click('#dateInput')
  await page.type('#dateInput', '')
  await page.click('#submitBtn')

  await page.screenshot({path: 'form-noString.png'})
})

test("non historical date", async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:8080')

  await page.click('#dateInput')
  await page.type('#dateInput', '26/22/1985')
  await page.click('#submitBtn')

  await page.screenshot({path: 'form-incorrectDate.png'})
})