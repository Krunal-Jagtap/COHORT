/*
Create a basic calculator that performs +, -, *, / based on user input.

Problem Statement:
Write a function that uses switch-case to perform arithmetic operations. Handle the edge case of "Cannot
divide by zero".
*/

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "*":
      return num1 * num2;

    case "/":
      return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";

    default:
      return "Invalid Operator";
  }
}
