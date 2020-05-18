const change = require('./ex9');

it('should return the opposite of parameter', ()=>{
  expect(change(true)).toBe(false);
  expect(change(false)).toBe(true);
})