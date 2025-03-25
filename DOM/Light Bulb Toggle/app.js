const body = document.querySelector("#body");
const bulb = document.querySelector("#bulb");
const state = document.querySelector("#status");

const toggleButton = document.querySelector("#toggleButton");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  bulb.classList.toggle("off");

  if (
    toggleButton.innerHTML === "Turn On" ||
    state.innerHTML === "Status: Off"
  ) {
    toggleButton.innerHTML = "Turn Off";
    state.innerHTML = "Status: On";
  } else {
    toggleButton.innerHTML = "Turn On";
    state.innerHTML = "Status: Off";
  }
});
