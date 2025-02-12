/*
A leap year is divisible by 4, but not by 100 unless also divisible by 400.

Problem Statement:
Write a function to check if a year is a leap year.
*/

function isLeapYear(year) {
  if ((year % 4 === O && year % 100 !== 0) || year % 400 === 0) {
    return "Leap Year";
  } else {
    return "Not a Leap Year";
  }
}
