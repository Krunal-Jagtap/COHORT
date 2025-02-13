/*
A school bus has students inside, but the first student in line needs to get off at the next stop. Remove
the first student from the bus.

Problem Statement: Create a function that removes the first student from the bus and returns the
updated list.
*/

function removeStudent(bus) {
  bus.shift();
  return bus;
}
