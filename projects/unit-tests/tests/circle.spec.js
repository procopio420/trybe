/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require("assert");
const circle = require("../src/circle");

describe("#circle", () => {
  it("given a radius, should return an object with circles info", () => {
    assert.strictEqual(typeof circle(1), "object");
    assert.strictEqual(Object.keys(circle(1)).length, 3);
    assert.strictEqual(circle(), undefined);
    assert.deepStrictEqual(circle(2), {
      radius: 2,
      area: 3.14 * 4,
      circumference: 2 * 3.14 * 2,
    });
    assert.strictEqual(circle(3).area, 3.14 * 3 * 3);
    assert.deepStrictEqual(circle(3), {
      radius: 3,
      area: 3.14 * 3 * 3,
      circumference: 2 * 3.14 * 3,
    });
  });
});
