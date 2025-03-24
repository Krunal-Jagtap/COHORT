/*
You are analyzing user data in a database. You need to count how many properties exist in a
user's profile to determine if the profile is complete.

Write a function that returns the number of properties in an object.

Constraints
- user should be a valid object.
- If the object is empty, return O.
*/

function countProperties(user) {
  // Return the number of properties in user
  let count = Object.keys(user).length;
  if (count == 0) {
    return 0;
  }
  return count;
}
