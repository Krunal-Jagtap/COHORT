// Access Colors Buttons
const redButton = document.querySelector("#redButton");
const greenButton = document.querySelector("#greenButton");
const blueButton = document.querySelector("#blueButton");
const purpleButton = document.querySelector("#purpleButton");
const resetButton = document.querySelector("#resetButton");

// Click to change color
redButton.addEventListener("click", () => {
  mainHeading.style.color = "red";
});

greenButton.addEventListener("click", () => {
  mainHeading.style.color = "green";
});

blueButton.addEventListener("click", () => {
  mainHeading.style.color = "blue";
});

purpleButton.addEventListener("click", () => {
  mainHeading.style.color = "purple";
});

resetButton.addEventListener("click", () => {
  mainHeading.style.color = "white";
});
