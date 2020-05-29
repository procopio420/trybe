const lib = require('./ex4');

test('', () => {
  const mockFunction1 = jest
    .spyOn(lib, 'function1')
    .mockImplementation(str => str.toLowerCase());
  expect(mockFunction1('AAA')).toBe('aaa');

  lib.function1.mockRestore();

  expect(lib.function1('aaa')).toBe('AAA');
});
