/*
You need to create a constructor function Animal that takes a name parameter. Add a method
makeSound to its prototype, which always returns "Some generic sound".

• Implement a constructor function Animal that initializes the name property.
• Attach a method makeSound to its prototype that returns "Some generic sound".
*/

Animal.prototype.makeSound = function () {
  return "Some generic sound";
};

function Animal(name) {
  this.name = name;
}
