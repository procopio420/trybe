const assert = require('assert');
// escreva a função removeMiddle para passar nos testes abaixo:

function removeMiddle(arr){
  let middlePosition = Math.floor(arr.length/2);
  const removed = words.splice(middlePosition, 1);
  return removed;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepEqual(output, expectedOutput);
assert.deepEqual(words, expectedWords);