const lib = require('./bonus');

test('', async () => {
  const fetchReturn = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };
  lib.fetchJoke = jest.fn().mockResolvedValue(fetchReturn);

  expect(lib.fetchJoke()).resolves.toBe(fetchReturn);
});
