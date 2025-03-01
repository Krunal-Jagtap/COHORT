/*
You have a basket full of apples. You need to count how many apples are in the basket, but you don't know
the exact number. Each time you pick an apple, you count one. Your task is to count how many apples are
in the basket.

Problem Statement:
Create a function that counts the number of apples in the basket using a loop.
*/

function countApples(apples) {
  let count = 0;

  for (index = 1; index <= apples; index++) {
    count++;
  }

  return count;
}
