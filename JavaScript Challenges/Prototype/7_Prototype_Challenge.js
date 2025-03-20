/*
Create an Employee constructor that initializes name, position, and salary. Implement:

• applyBonus(percent): Increases the salary by the given percentage.
• Implement Employee constructor with name, position, and salary
• Attach applyBonus(percent) to the prototype to increase salary.
*/

function Employee(name, position, salary) {
  // Initialize name, position, and salary properties
  this.name = name;
  this.position = position;
  this.salary = salary;
}

// Define applyBonus method on Employee's prototype
Employee.prototype.applyBonus = function (bonus) {
  return (this.salary += (this.salary * bonus) / 100);
};
