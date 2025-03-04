// Types of Operators in JS

// Assignment operators
const userID = 15;
console.log(userID);
// Value = 15 assign to userID

// Arithmetic operators

// Addition - ( + )
const num1 = 30;
const num2 = 20;
let sum = num1 + num2;
console.log(sum);

// Subtraction - ( - )
sum = num1 - num2;
console.log(sum);

// Multiplication ( * )
sum = num1 * num2;
console.log(sum);

// Division - ( / )
sum = num1 / num2;
console.log(sum);

// Modulus - ( % )
sum = num1 % num2;
console.log(sum);

// .toFixed(2)  show numbers after the decimal point
const result = 0.1 + 0.2;
console.log(result);
console.log(result.toFixed(2));

// String Operators

const str1 = "Hello";
const str2 = "JavaScript";
const str3 = str1 + str2;
console.log(str3);

// comparison operators

// Checks if two values are equal - ( == )
console.log(10 == "10");

// Checks if two values + type Strict Equal - ( === )
console.log(100 === "100");
console.log(50 === 50);

// Checks if two values Not Equal - ( != )
console.log(25 != 25);

// Greater Than - ( > )
console.log(55 > 35);

// Less Than - ( < )
console.log(55 < 35);

// Greater Than or Equal To - ( >= )
console.log(10 <= 10);

// Less Than or Equal To - (<=)
console.log(5 >= 10);

// Logical operators learn later in ( if else )
// logical AND - ( && )
const x = 20;
const y = 30;
console.log(x > 10 && y < 10);

// logical OR - ( || )
const a = 20;
const b = 30;
console.log(a > 10 || b < 10);

// logical NOT - ( ! )
const isRaining = false;
console.log(!isRaining);
