const users = require('./test');

function lookup(login, info){
  const selectedUser = users.find(user => user.login === login);
  if(!selectedUser) {
    throw new Error('Could not find user');
  }
  if(!Object.keys(selectedUser).includes(info)){
    throw new Error('Could not find property');
  }
  return selectedUser[info];
}

module.exports = lookup;