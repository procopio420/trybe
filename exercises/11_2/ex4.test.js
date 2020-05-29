const lib = require('./ex4');

jest.mock('./ex4');

test('', () => {
  lib.function1.mockImplementationOnce(str => str.toLowerCase());
  lib.function2.mockImplementationOnce(str => str[str.length - 1]);
  lib.function3.mockImplementationOnce(
    (str1, str2, str3) => `${str1}${str2}${str3}`,
  );
});
