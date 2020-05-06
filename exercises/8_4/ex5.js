const greetPeople = (people) => {
  let finalResponse = []
  for (const person in people) {
    let greeting = 'Hello ';
    greeting += people[person];
    finalResponse.push(greeting);
  }

  return finalResponse;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
/*
  Use a variável parameter como parâmetro da função acima, escreva testes
  para verificar se a mesma está retornando a como se vê na variável result
  e, caso não esteja, altere o código para que ele passe nos testes.
  Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo
  a função aos poucos:
*/
const assert = require('assert');

assert.deepEqual(greetPeople(parameter), result);