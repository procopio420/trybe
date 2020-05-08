/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require("assert");
const productDetails = require("../src/productDetails");

describe("#productDetails", () => {
  it("tests the function has the correct behaviour", () => {
    assert.strictEqual(
      Array.isArray(productDetails("Alcool gel", "Máscara")),
      true
    );
    assert.strictEqual(productDetails("Alcool gel", "Máscara").length, 2);
    const resultArray = productDetails("Alcool gel", "Máscara");
    assert.strictEqual(typeof resultArray[0], "object");
    assert.strictEqual(typeof resultArray[1], "object");
    assert.notDeepEqual(resultArray[0], resultArray[1]);
    assert.ok(resultArray[0].details.productId.endsWith("123"));
    assert.ok(resultArray[1].details.productId.endsWith("123"));
  });
});
