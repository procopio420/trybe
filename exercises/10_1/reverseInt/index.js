// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const strN = n.toString().split('');
  if(strN[0]==='-'){
    const strNumber = strN.slice(1,strN.length).reverse().join('');
    const responseArr = [];
    responseArr.push('-');
    responseArr.push(strNumber);
    return Number(responseArr.join(''));
  }
  return Number(strN.reverse().join(''));
}

reverseInt(-5)

module.exports = reverseInt;
