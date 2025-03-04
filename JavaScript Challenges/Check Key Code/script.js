let myInput = document.getElementById("myInput"); // Access input

const handelKeyPress = (event) => {
  myInput.value = ""; // input clear

  document.querySelector(".keyPress").textContent = `Key = ${event.key}`;
  document.querySelector(".keyCode").textContent = `Key code = ${event.code}`;

  document.querySelector(
    ".charCode"
  ).textContent = `Char Code At = ${event.key.charCodeAt(0)}`;
};

myInput.addEventListener("keydown", handelKeyPress);
