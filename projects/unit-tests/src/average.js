const average = (arr) => {
  let sum = 0;
  if (!arr.length) {
    return undefined;
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] === 'number') {
      sum += arr[i];
    } else {
      return undefined;
    }
  }
  return Math.round(sum / arr.length);
};

module.exports = average;
