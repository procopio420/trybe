const assert = require('assert');

function isAbove(num1, num2) {
  return num1 > num2;
}

assert.equal(isAbove(10,9), true, '10 greater than 9, must return true');
assert.equal(isAbove(9,10), false, '9 minor than 10, must return false');