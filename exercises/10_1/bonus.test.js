const getChange = require('./bonus');

it('should return empty array if parameters are equals', () => {
  expect(getChange(1, 1)).toEqual([]);
});

it('should return coins array if parameters are differents', () => {
  expect(getChange(215, 300)).toEqual([50, 20, 10, 5]);
  expect(getChange(486, 600)).toEqual([100, 10, 2, 2]);
  expect(getChange(12, 400)).toEqual([200, 100, 50, 20, 10, 5, 2, 1]);
});

it('should throw an error if first parameter is greater than second', () => {
  expect(() => getChange(100, 10)).toThrow('paid value is not enough');
});
