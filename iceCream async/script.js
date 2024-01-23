let stocks = {
  Fruits: ["Strawberry", "grapes", "bananas", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  topping: ["chocolates", "peanuts"],
};

let is_shop_open = false;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("Shop is closed, come tomorrow"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]} is selected`);

    await time(0o0);
    console.log("the production has started");

    await time(2000);
    console.log("cut the fruits");

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has added`);

    await time(1000);
    console.log(`start machine`);

    await time(2000);
    console.log(`ice cream placed on ${stocks.holder[0]}`);

    await time(3000);
    console.log(`${stocks.topping[0]} was selected`);

    await time(2000);
    console.log("ice cream has been served");
  } catch (error) {
    console.log("the customer has left", error);
  } finally {
    console.log("the day ended , shop is closed");
  }
}

kitchen();
