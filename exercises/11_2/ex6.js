const fetch = require('node-fetch');

const fetchAPI = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const responseJSON = await response.json();
  return responseJSON;
};

module.exports = { fetchAPI };
