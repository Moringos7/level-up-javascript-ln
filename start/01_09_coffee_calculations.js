const numCoffee = [2,3,1,5];
const coffeValue = 1.25;
const total = numCoffee.reduce((acumulator, currentValue) =>
  acumulator + (currentValue * coffeValue), 0
);
console.log(`The total bill is ${total}`);