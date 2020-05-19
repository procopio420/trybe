const myFizzBuzz = require('./ex6');

it('should return fizzbuzz if parameter is divisible per 3 and 5', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
});

it('should return fizz if parameter is divisible only per 3', () => {
  expect(myFizzBuzz(3)).toBe('fizz');
});

it('should return buzz if parameter is divisible only per 5', () => {
  expect(myFizzBuzz(5)).toBe('buzz');
});

it('should return the parameter if parameter is not divisible per 3 and 5', () => {
  expect(myFizzBuzz(4)).toBe(4);
});

it('should return false if parameter is not a number', () => {
  expect(myFizzBuzz('2')).toBe(false);
});
