const dateCheck = require('../src/script/form')

test('dateCheck function exists', () => {
  addEventListener: jest.fn()
  expect(typeof dateCheck).toEqual('functiom')
})
