let stocks = {
  Fruits: ["Strawberry", "grapes", "bananas", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  topping: ["chocolates", "peanuts"],
};

let is_shop_open = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("our shop is closed"));
    }
  });
};

order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
  .then(() => {
    return order(0o0, () => console.log("Production has started"));
  })

  .then(() => {
    return order(2000, () => console.log("The fruit was chopped"));
  })

  .then(() => {
    return order(3000, () =>
      console.log(
        `${stocks.liquid[0]} and ${stocks.liquid[1]} has been selected`
      )
    );
  })
  .then(() => {
    return order(1000, () => console.log("started the machine"));
  })
  .then(() => {
    return order(2000, () =>
      console.log(`ice cream placed on${stocks.holder[0]}`)
    );
  })

  .then(() => {
    return order(3000, () => console.log(`${stocks.topping[0]} was chosen`));
  })

  .then(() => {
    return order(2000, () => console.log("ice cream was served"));
  })

  .catch(() => {
    console.log("customer has left ");
  })

  .finally(() => {
    console.log("Day ended , our shop is closed");
  });
