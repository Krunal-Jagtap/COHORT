/*
Pattern :

   *
  ***
 *****
*******
 *****
  ***
   *

*/

function shinyDiamondRug(n) {
  let pattern = "";

  for (let i = 1; i <= n; i++) {
    let spaces = n - i;
    let stars = 2 * i - 1;
    for (let j = 0; j < spaces; j++) {
      pattern += " ";
    }
    for (let j = 0; j < stars; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }

  for (let i = n - 1; i >= 1; i--) {
    let spaces = n - i;
    let stars = 2 * i - 1;
    for (let j = 0; j < spaces; j++) {
      pattern += " ";
    }
    for (let j = 0; j < stars; j++) {
      pattern += "*";
    }
    if (i !== 1) {
      pattern += "\n";
    }
  }
  return pattern;
}
