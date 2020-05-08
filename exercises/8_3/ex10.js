const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

assert.deepEqual(obj1, obj2, 'obj1 must be equal to obj2');
assert.notDeepEqual(obj2, obj3, 'obj2 must not be equal to obj3');