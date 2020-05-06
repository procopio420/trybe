const assert = require('assert');
// escreva a função addAllnumbers para passar nos testes abaixo:

function addAllnumbers(arr){
  let sum = 0;
  for(let item of arr){
    sum+=item;
  }
  return sum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected)