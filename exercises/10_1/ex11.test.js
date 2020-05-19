const isAbove = require('./ex11');

it('should return true if first parameter is bigger than second', () => {
  expect(isAbove(3, 1)).toBe(true);
  expect(isAbove(0, -1)).toBe(true);
});

it('should return false if second parameter is bigger than first', () => {
  expect(isAbove(1, 2)).toBe(false);
  expect(isAbove(-2, -1)).toBe(false);
});
