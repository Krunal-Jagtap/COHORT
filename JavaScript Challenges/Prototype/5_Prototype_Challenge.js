/*
Create a Shopping Cart system where items can be added with a price. Implement a method
getTotalPrice( ) that calculates the total price of all items in the cart.

• Implement a constructor function ShoppingCart that initializes an empty items array.
• Attach addItem(price) to the prototype to add items.
• Attach getTotalPrice() to calculate the total price of items.
*/

// You need to implement the ShoppingCart constructor function and its prototype methods

function ShoppingCart() {
  this.items = [];
}

// Define addItem method on ShoppingCart's prototype
ShoppingCart.prototype.addItem = function (price) {
  this.items.push(price);
  return this.items;
};

// Define getTotalPrice method on ShoppingCart's prototype
ShoppingCart.prototype.getTotalPrice = function () {
  return this.items.reduce((accumulator, element) => {
    return accumulator + element;
  }, 0);
};
