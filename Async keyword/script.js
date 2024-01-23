let stocks = {
  Fruits: ["Strawberry", "grapes", "bananas", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  topping: ["chocolates", "peanuts"],
};

let is_shop_open = true;

let topping_choices = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Which topping would you like ?"));
    }, 3000);
  });
};

async function kitchen() {
  console.log("A");
  console.log("B");
  console.log("C");
  await topping_choices();
  console.log("D");
  console.log("E");
}
kitchen();

console.log("doing the dishes");
console.log("Cleaning the table");
console.log("taking other order");
