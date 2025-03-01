/*
You're planning a week's schedule and need to count the days you are working. You have an array where
each element represents a day of the week. How can you calculate how many days you are working?

Problem Statement:
Create a function that takes an array of days (e.g., ["Monday" ,"Friday" and returns the "Tuesday",
number of days you're working. "Saturday" and "Sunday" are not working days.
*/

function workingDays(days) {
  let workingDays = 0;

  for (let index = 0; index < days.length; index++) {
    if (days[index] !== "Saturday" && days[index] !== "Sunday") workingDays++;
  }

  return workingDays;
}
