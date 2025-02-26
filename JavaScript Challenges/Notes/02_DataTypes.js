// Primitive Data types :

// Number
const userId = 1234;
console.log(userId);
console.log(typeof userId);

// Strings
const codeLanguage = "JavaScript";
console.log(codeLanguage);
console.log(typeof codeLanguage);

// Boolean - return true or false
const hasCard = true;
console.log(hasCard);
console.log(typeof hasCard);

// Undefined - no value assign in it
let userEmail;
console.log(userEmail);
console.log(typeof userEmail);

// Null - Used later
const userPhoneNumber = null;
console.log(userPhoneNumber);
console.log(typeof userPhoneNumber);

// BigInt - big numbers - ( n )
const userIndex = 9845198n;
console.log(userIndex);
console.log(typeof userIndex);

// Symbol - learn later

// Convert String to Number
const messagePopUp = "4";
console.log(messagePopUp);
console.log(typeof messagePopUp);
console.log(typeof Number(messagePopUp));

// Convert Number to String
const userCart = 7;
console.log(userCart);
console.log(typeof userCart);
console.log(typeof String(userCart));

// Truthy Values :
// - true
// - Non zero number ( 65 )
// - Non empty string ( "Hello" )
// - Non empty ( Array - Objects )

// Falsy Values :
// - false
// - 0
// - empty string ( "" )
// - ( Null - Undefined)

// Checking

const check = true;

if (check) {
  console.log("Truthy Value");
} else {
  console.log("Falsy Value");
}
