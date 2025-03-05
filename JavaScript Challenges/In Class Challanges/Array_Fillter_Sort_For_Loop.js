// Create an array containing different types of teas
const teasTypes = ["milkTea", "blackTea", "greenTea", "herbalTea"];

console.log(teasTypes);

// Add Chamomile Tea
teasTypes.push("chamomileTea");

console.log(teasTypes);

// Remove greenTea
const index = teasTypes.indexOf("greenTea");

console.log(index);

if (index > -1) {
  teasTypes.splice(index, 1);
}

console.log(teasTypes);

// Filter the list to only include teas that are caffeinated
const caffeinatedTeas = teasTypes.filter((teas) => teas !== "herbalTea");

console.log(caffeinatedTeas);

// Sort the list alphabetically
console.log(teasTypes);
teasTypes.sort();

console.log(teasTypes);

// print teas using for loop

for (let index = 0; index < teasTypes.length; index++) {
  console.log(teasTypes[index]);
}

// find most character tea name using for loop
let mostCharacterTea = "";

for (let index = 0; index < teasTypes.length; index++) {
  if (teasTypes[index].length > mostCharacterTea.length) {
    mostCharacterTea = teasTypes[index];
  }
}

console.log(mostCharacterTea);

// Reversed order
const reversedOrderedTeas = [];
for (let index = teasTypes.length - 1; index >= 0; index--) {
  reversedOrderedTeas.push(teasTypes[index]);

  console.log(teasTypes[index]);
}
