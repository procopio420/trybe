const myCounter = () => {
  const myArray = [];
  for (let counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
    for (let counter1 = 2; counter1 <= 3; counter1 += 1) {
      myArray.push(counter1);
    }
  }
  return myArray;
};

module.exports = myCounter;
