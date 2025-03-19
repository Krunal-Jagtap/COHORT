/*
You need to create a Counter constructor function that initializes a count property to 0. The
counter should have two prototype methods:
• increment() increases the count by 1.
• decrement() decreases the count by 1.

• Implement a constructor function counter that initializes count to 0
• Attach increment() and decrement() methods to the prototype.
*/

// You need to implement the Counter constructor function and its prototype methods

function Counter() {
  this.count = 0;
}

// Define increment method on Counter's prototype
Counter.prototype.increment = function () {
  return (this.count += 1);
};

// Define decrement method on Counter's prototype
Counter.prototype.decrement = function () {
  return (this.count -= 1);
};
