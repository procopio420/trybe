const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

test('all letters should be in upper case', done => {
  uppercase('string', result => {
    expect(result).toBe('STRING');
    done();
  });
});
