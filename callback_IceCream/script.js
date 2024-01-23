let stocks = {
  Fruits: ["Strawberry", "grapes", "bananas", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  topping: ["chocolates", "peanuts"],
};

let order = (Fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[Fruit_name]} was selected`);
    call_production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log("production has started");
    setTimeout(() => {
      console.log("the fruit has been chopped");
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);
        setTimeout(() => {
          console.log("The machine was started");
          setTimeout(() => {
            console.log(`Ice cream was placed on ${stocks.holder[0]}`);
            setTimeout(() => {
              `${stocks.topping[0]} was chosen`;
              setTimeout(() => {
                console.log("serve ice cream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0o0);
};

order(0, production);
