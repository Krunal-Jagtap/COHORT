/*
You need to determine if a person is eligible to vote (age 18 or above).

Problem Statement:
Write a function that checks if a person is eligible to vote and returns "Eligible" or "Not Eligible".
*/

function checkVotingEligibility(age) {
  if (age >= 18) {
    return "Eligible";
  } else {
    return "Not Eligible";
  }
}
