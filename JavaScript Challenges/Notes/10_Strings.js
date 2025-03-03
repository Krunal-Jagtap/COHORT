// Strings - Characters (' ' - " ")

const string = "Hello";
console.log(string);

// length - Number of characters
console.log(string.length);

// Escape Character
let message = "Welcome to our 'website'";

// Single quote - ( \' )
message = "Welcome to our \'website\'";
console.log(message);

// Double quote - ( \"" )
message = 'Welcome to our \"website\"';
console.log(message);

// New line - ( \n )
message = 'Welcome \nto our "website"';
console.log(message);

// Find index - Case Sensitive ( now found return -1 )
console.log(message.indexOf("our"));

// Search
let greet = "Hi there, Can you see there is cute bird";
result = greet.search(/there/g);
console.log(result);

// Match - ( /g - Global ) return all matches from greet string
// ( /i ) ignore case sensitive
result = greet.match(/there/g);
console.log(result);

// upperCase
console.log(greet.toUpperCase());

// lowerCase
console.log(greet.toLowerCase());
