// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const strLowerCase = str.toLowerCase();
  let n = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      strLowerCase[i] === 'a' ||
      strLowerCase[i] === 'e' ||
      strLowerCase[i] === 'i' ||
      strLowerCase[i] === 'o' ||
      strLowerCase[i] === 'u'
    ) {
      n++;
    }
  }
  return n;
}

module.exports = vowels;
