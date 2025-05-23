// Function -
// Block of code - reuseable

function msgPopUp(leaning) {
  console.log("Hello all, we are leaning " + leaning);
}

msgPopUp("javaScript");

// Function with parameters

function addition(a, b) {
  return a + b;
}

console.log(addition(1, 1));

// Anonymous Function -
// Function without name

let subtraction = function (a, b) {
  console.log(a * b);
};

subtraction(2, 2);

// Arrow Function -
const multiplication = (num1, num2) => {
  return num1 * num2;
};

console.log(multiplication(2, 8));
