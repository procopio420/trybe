const restaurant = {};

const orderFromMenu = (request) => {
  restaurant.consumption.push(request);
};

const payForConsumption = () => {
  let sum = 0;
  for (let i = 0; i < restaurant.consumption.length; i += 1) {
    if (restaurant.fetchMenu.food[restaurant.consumption[i]]) {
      sum += restaurant.fetchMenu.food[restaurant.consumption[i]];
    }
    if (restaurant.fetchMenu.drink[restaurant.consumption[i]]) {
      sum += restaurant.fetchMenu.drink[restaurant.consumption[i]];
    }
  }
  return (sum * 1.1).toPrecision(2);
};

const createMenu = (menu) => {
  restaurant.fetchMenu = menu;
  restaurant.consumption = [];
  restaurant.order = orderFromMenu;
  restaurant.pay = payForConsumption;

  return restaurant;
};

module.exports = createMenu;
