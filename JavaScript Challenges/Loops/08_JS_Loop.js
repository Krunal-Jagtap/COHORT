/*
You're shopping for groceries and want to know the total cost of all the items in your cart. You have an
array of item prices.

Problem Statement:
Create a function that takes an array of item prices and returns the total cost.
*/

function totalPrice(prices) {
  let totalCost = 0.0;

  for (let index = 0; index < prices.length; index++) {
    totalCost += prices[index];
  }

  return totalCost;
}
