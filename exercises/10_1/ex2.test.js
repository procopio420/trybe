const myIndexOf = require('./ex2');

it('should return the index of the element', () => {
  expect(myIndexOf([1,2,3,4], 3)).toBe(2);
})

it('should return -1 if theres no element in array', () => {
  expect(myIndexOf([1,2,3,4], 5)).toBe(-1);
})