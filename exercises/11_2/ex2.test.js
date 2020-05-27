const lib = require('./ex1');

jest.mock('./ex1');

test('Testing randomNumber', () => {
  lib.randomNumber.mockImplementationOnce((a, b) => a / b);
  expect(lib.randomNumber(4,2)).toBe(2);
});
