const fetch = require('node-fetch');

const getRepos = url => {
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      return data.map(repo => repo.name);
    });
};

test('should include all repositories', async () => {
  const response = await getRepos(
    'https://api.github.com/users/tryber/repos?per_page=100',
  );
  return expect(response).toEqual(
    expect.arrayContaining([
      'sd-01-week4-5-project-todo-list',
      'sd-01-week4-5-project-meme-generator',
    ]),
  );
});
