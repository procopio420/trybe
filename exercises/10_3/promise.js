const arrayFunction = async () => {
  try {
    const array = [];
    for (let i = 0; i < 10; i++) {
      array.push(Math.round(Math.random() * 50));
    }
    const squareSum = array.reduce((acc, el) => acc + el * el, 0);

    if (squareSum > 8000) {
      throw new Error();
    }
    const divisores = [2, 3, 5, 10];
    const divArray = divisores.map((el) => squareSum / el);

    return divArray;
  } catch (err) {
    return err;
  }
};

const sumFinalFunction = async (array) => {
  return array.reduce((acc, el) => acc + el, 0);
};

arrayFunction()
  .then((array) =>
    sumFinalFunction(array).then((response) => console.log(response))
  )
  .catch((err) =>
    console.log('É mais de oito mil! Essa promise deve estar quebrada!')
  );
