// Arrays -

let games = ["Cricket", "Football", "Badminton"];
console.log(games);
console.log(typeof games);

// Accessing Elements -
console.log(games[0]);
console.log(games[2]);

// Modifying Elements -
games[1] = "Golf";
console.log(games);

//*  Array Iteration using loops -
// For of loop - ( Items )
for (const game of games) {
  console.log(game);
}

// For in loop - ( in = Index )
for (const key in games) {
  console.log(key);
}

// forEach -
games.forEach((element, index, arr) => {
  console.log(`${index} ${element} ${arr}`);
});

// Map - ( Does not make changes in original array, return new array)
games.map((element, index, arr) => {
  console.log(`${index} ${element} ${arr}`);
});

// push - add element at end
console.log(games);
games.push("videoGames");
console.log(games);

// pop - remove element at end
games.pop();
console.log(games);

// unshift - add element at start
games.unshift("Pool");
console.log(games);

// shift - remove element at start
games.shift();
console.log(games);

// Splice - remove and replace elements
games.splice(1, 1);
console.log(games);

games.splice(1, 0, "Chess");
console.log(games);

// indexof - return index number ( not found return -1 )
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 4, 9, 10];
console.log(numbers.indexOf(8));

// lastindexof - search backwards
console.log(numbers.indexOf(4));
console.log(numbers.lastIndexOf(4));

// include - return true or false
console.log(numbers.includes(10));
console.log(numbers.includes(11));
