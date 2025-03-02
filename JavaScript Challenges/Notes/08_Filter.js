const numbers = [1, 2, 3, 2, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

// find - find 1st element and return it, ( not found return undefined )
const answer1 = numbers.find((element, index, arr) => {
  console.log(`Index is = ${index} and Value is = ${element}`);

  return element > 3;
});
console.log(answer1);

// findindex -
const multiplication = numbers.map((currEl) => currEl * 3);
console.log(multiplication);

const answer2 = multiplication.findIndex((element, index, arr) => {
  return element > 15;
});

console.log(answer2);

// Filter -

const answer3 = numbers.filter((element, index, arr) => {
  console.log(`Index is = ${index} and Value is = ${element}`);

  return element > 5;
});
console.log(answer3);

// delete number 10 and return other numbers from array
let deleteNumber = 10;

const cart = [12, 10, 73, 54, 56, 10, 32];

let updateCart = cart.filter((el) => {
  return el !== deleteNumber;
});

console.log(cart);
console.log(updateCart);

// Filter products by price

const products = [
  { name: "Laptop", price: 40000 },
  { name: "Phone", price: 10000 },
  { name: "Keyboard", price: 2000 },
  { name: "mouse", price: 300 },
];

const filterProducts = products.filter((currentElement) => {
  return currentElement.price <= 2000;
});

console.log(filterProducts);
