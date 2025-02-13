/*
A puppy named Max was playing in the park, but he went to the first position of the queue instead of
waiting at the end. You need to add Max at the beginning of the queue.

Problem Statement: Create a function that adds a puppy to the front of the queue and returns the
updated queue.
*/

function addPuppy(queue, puppyName) {
  queue.unshift(puppyName);
  return queue;
}
