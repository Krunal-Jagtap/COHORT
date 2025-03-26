// Access Inputs
const nameInput = document.querySelector("#nameInput");
const jobInput = document.querySelector("#jobInput");
const ageInput = document.querySelector("#ageInput");
const bioInput = document.querySelector("#bioInput");

// See changes in real-time
nameInput.addEventListener("input", () => {
  nameDisplay.textContent = nameInput.value;
});

jobInput.addEventListener("input", () => {
  jobDisplay.textContent = jobInput.value;
});

ageInput.addEventListener("input", () => {
  ageDisplay.textContent = ageInput.value;
});

bioInput.addEventListener("input", () => {
  bioDisplay.textContent = bioInput.value;
});
