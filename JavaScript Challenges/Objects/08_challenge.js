/*
In your web application, some objects contain unnecessary properties. To optimize
performance, you need to remove all properties that have null or undefined values.

Write a function that removes all properties with null or undefined values from an object.

Constraints
- The input should be a valid object.
- If the object has no valid properties left, return O.
*/

function cleanObject(obj) {
  // Remove all properties with null or undefined values
  Object.keys(obj).forEach((key) => {
    if (obj[key] === null || obj[key] === undefined) {
      delete obj[key];
    }
  });
  return obj;
}
