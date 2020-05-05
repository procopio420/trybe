const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

assert.equal(myFizzBuzz(15), 'fizzbuzz', 'return must be fizzbuzz')
assert.equal(myFizzBuzz(6), 'fizz', 'return must be fizz');
assert.equal(myFizzBuzz(10), 'buzz', 'return must be buzz');
assert.equal(myFizzBuzz(7), 7, 'return must be the number');
assert.equal(myFizzBuzz("2"), false, 'return must be false if isnt a number');

