const lib = require('./ex1');

test('Test randomNumber function', () => {
  lib.randomNumber = jest.fn().mockReturnValue(10);
  expect(lib.randomNumber()).toBe(10);
  expect(lib.randomNumber).toHaveBeenCalled();
  expect(lib.randomNumber).toHaveBeenCalledTimes(1);
});
