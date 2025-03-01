/*
For Loop - 

for (initialization; condition; iteration) {
  Code to be executed in each iteration
}
*/

// for loop to count from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Calculate the sum of numbers from 1 to 10
let sum = 0;
for (let num = 1; num <= 10; num++) {
  sum = sum + num;
}
console.log(sum);

/*
While Loop -

while (condition) {
    Code to be executed as long as the condition is true
}
*/

// while loop count from 1 to 10
let number = 1;
while (number <= 10) {
  console.log(number);
  number++;
}

// Table of 3
let num = 1;
while (num <= 10) {
  console.log("3 * " + num + " = " + 3 * num);
  num++;
}

/*
Do-While Loop -

do {
    Code to be executed at least once
} while (condition);
*/

// Simple do...while loop count from 1 to 10
let count = 1;
do {
  console.log(count);
  count++;
} while (count <= 10);
