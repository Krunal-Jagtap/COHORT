/*
You wrote a love letter, but you want to insert your partner's name at the beginning of the message.

Problem Statement: Create a function that inserts the partner's name at the start of the message and
returns the updated message.
*/

function writeLoveLetter(message, name) {
  message.unshift(name);
  return message;
}
