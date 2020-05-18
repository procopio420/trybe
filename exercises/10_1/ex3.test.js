const mySum = require('./ex3');

it('should return of all positive numbers in array', () => {
  expect(mySum([1, 2, 3, 4])).toBe(10);
});

it('should return of mixed positives and negatives numbers in array', () => {
  expect(mySum([1, -2, -3, 4])).toBe(0);
});
