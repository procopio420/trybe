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

test('Should return the right name if ID exists', async ()=>{
  const result = await getUserName(4);
  expect(result).toEqual('Mark');
})

test('Should return an error if ID doesnt exists', async ()=>{
  try{
    await getUserName(1);
  } catch(err) {
    expect(err).toEqual({ error: 'User with ' + 1 + ' not found.' });
  }
})