const sum = require('./ex1');

it('should return sum', () => {
  expect(sum(4, 5)).toBe(9);
  expect(sum(0, 0)).toBe(0);
});

it('should throw an error with parameter as string', () => {
  expect(() => sum(4, '5')).toThrow('parameters must be numbers');
});
