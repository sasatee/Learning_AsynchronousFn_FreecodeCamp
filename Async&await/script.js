let stocks = {
  Fruits: ["Strawberry", "grapes", "bananas", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  topping: ["chocolates", "peanuts"],
};

let is_shop_open = true;

// let order = () => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
// };

// order()
//   .then()
//   .then()
//   .then()
//   .catch()
//   .finally()

async function order() {
  try {
    await abc;
  } catch (error) {
    console.log("abc doesn't exists ", error);
  } finally {
    console.log("run code anyways");
  }
}

order().then(() => console.log("adadadadad"));
