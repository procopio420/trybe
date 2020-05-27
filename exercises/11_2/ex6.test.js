const lib = require('./ex6');

jest.mock('./ex6');

test('Resolved function', async () => {
  lib.fetchAPI.mockResolvedValue('request sucess');

  expect(lib.fetchAPI()).resolves.toBe('request sucess');
});

test('Rejected function', async () => {
  lib.fetchAPI.mockRejectedValue('request failed');

  expect(lib.fetchAPI()).rejects.toMatch('request failed')
});
