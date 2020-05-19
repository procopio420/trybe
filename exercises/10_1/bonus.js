function getChange(payable, paid) {
  if (paid < payable) throw new Error("paid value is not enough");
  
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  let remaining = paid - payable;
  let sumChange = 0;

  let pos = 0;
  while (sumChange < remaining) {
    if (sumChange + coins[pos] > remaining) {
      pos++;
    } else {
      sumChange += coins[pos];
      change.push(coins[pos]);
    }
  }

  return change;
}

module.exports = getChange;