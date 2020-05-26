const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

const findUserById = id => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = userID => {
  return findUserById(userID).then(user => user.name);
};

test('Should return the right name if ID exists', ()=>{
  expect.assertions(1);
  return getUserName(4).then(user => {
    expect(user).toEqual('Mark');
  })
})

test('Should return an error if ID doesnt exists', ()=>{
  expect.assertions(1);
  return getUserName(1).catch(error => {
    expect(error).toEqual({ error: 'User with ' + 1 + ' not found.' });
  })
})
