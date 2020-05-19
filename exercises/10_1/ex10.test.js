const { obj1, obj2, obj3 } = require('./ex10');

it('obj1 should be equal to obj2', () => {
  expect(obj1).toEqual(obj2);
});

it('obj1 and obj2 should be different to obj3', () => {
  expect(obj1).not.toEqual(obj3);
  expect(obj2).not.toEqual(obj3);
});
