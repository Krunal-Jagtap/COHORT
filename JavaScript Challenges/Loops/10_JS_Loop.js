/*
Pattern :

****
***
**
*

*/

function invertedMountain(n) {
  let line = "";
  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      line += "*";
    }
    if (i != 1) {
      line += "\n";
    }
  }
  return line;
}
