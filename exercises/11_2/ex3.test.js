const lib = require('./ex1');

jest.mock('./ex1');

test('', () => {
  lib.randomNumber.mockImplementation((a, b, c) => a * b * c);
  expect(lib.randomNumber(1, 2, 3)).toBe(6);
  expect(lib.randomNumber(2, 2, 3)).toBe(12);
  expect(lib.randomNumber(4, 2, 3)).toBe(24);

  lib.randomNumber.mockReset();

  lib.randomNumber.mockImplementation(a => a * 2);
  expect(lib.randomNumber(2)).toBe(4);
  expect(lib.randomNumber(4)).toBe(8);
});
