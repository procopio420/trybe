
function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  let remaining = paid - payable;

  // escreva seu código aqui...
  if (payable > paid) throw new Error('paid value is not enough');

  let position = 0;
  while (remaining > 0) {
    if (remaining >= coins[position]) {
      remaining -= coins[position];
      change.push(coins[position]);
    } else {
      position++;
    }
  }
  return change;
}


console.log(getChange(60,100));

const assert = require('assert');

let result = getChange(1, 1); // no change/coins just an empty array
let expected = [];
assert.deepEqual(result, expected);

result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepEqual(result, expected);

result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
expected = [100, 10, 2, 2];
assert.deepEqual(result, expected);

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepEqual(result, expected);

assert.throws(() => {
  getChange(100, 10);
}, /^Error: paid value is not enough$/);