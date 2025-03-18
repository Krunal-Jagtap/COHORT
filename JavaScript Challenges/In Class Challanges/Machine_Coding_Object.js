// Create object representing a type of teas with properties for name, type, and caffeine content.

const teaTypes = {
  name: "Herbal Tea",
  "tea type": "Green",
  caffeine: "Low",
};

console.log(teaTypes);

// Access and print the name and type properties of the tea object.

console.log(teaTypes.name);
console.log(teaTypes["tea type"]);

// Add new property origin to the teeTypes object.

teaTypes.origin = "Assam";
console.log(teaTypes);

// Change the caffeine level low to medium.
teaTypes.caffeine = "Medium";
console.log(teaTypes);

// Remove tea type property from object.

delete teaTypes["tea type"];
console.log(teaTypes);

// Check if teaType object has property origin.
console.log("origin" in teaTypes);

// use for in loop to print all properties of the teaType object.
for (const teas in teaTypes) {
  console.log(`Key = ${teas}, Value = ${teaTypes[teas]}.`);
}

// Create nested object representing different types of teas and their properties.

const myTeas = {
  blackTea: {
    name: "Black Tea",
  },
  milkTea: {
    name: "Tea with milk",
  },
};

console.log(myTeas);

// Create copy of teaTypes objects.

const copyOfTeas = { ...teaTypes };
console.log(copyOfTeas);
