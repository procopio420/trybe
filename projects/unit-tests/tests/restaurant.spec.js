/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require("assert");
const createMenu = require("../src/restaurant");

describe("#createMenu", () => {
  it("tests the function has the correct behaviour", () => {
    assert.deepEqual(typeof createMenu({}).fetchMenu, "object");

    const keysRetornadas = Object.keys(
      createMenu({ food: {}, drink: {} }).fetchMenu
    );
    assert.deepEqual(keysRetornadas, ["food", "drink"]);

    const menuPassado = {
      food: { coxinha: 3.9, sopa: 9.9, sashimi: 39.9 },
      drink: { agua: 3.9, cerveja: 6.9 },
    };
    const objetoRetornado = createMenu(menuPassado);
    assert.deepEqual(objetoRetornado.fetchMenu, menuPassado);

    assert.deepEqual(objetoRetornado.consumption, []);

    objetoRetornado.order("coxinha");
    assert.deepEqual(objetoRetornado.consumption, ["coxinha"]);

    objetoRetornado.order("coxinha");
    objetoRetornado.order("agua");
    objetoRetornado.order("sopa");
    objetoRetornado.order("sashimi");
    assert.deepEqual(objetoRetornado.consumption, [
      "coxinha",
      "coxinha",
      "agua",
      "sopa",
      "sashimi",
    ]);

    objetoRetornado.order("coxinha");
    objetoRetornado.order("agua");
    objetoRetornado.order("coxinha");
    assert.deepEqual(objetoRetornado.consumption, [
      "coxinha",
      "coxinha",
      "agua",
      "sopa",
      "sashimi",
      "coxinha",
      "agua",
      "coxinha",
    ]);
    assert.equal(
      objetoRetornado.pay(),
      ((3.9 * 6 + 9.9 + 39.9) * 1.1).toPrecision(2)
    );
  });
});
