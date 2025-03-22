// Access Theme Button
const themeButton = document.querySelector("#theme_Btn");

function changeBackgroundColor(colorName) {
  document.body.style.backgroundColor = colorName;
}

// Dark - Light Mode Functionality
themeButton.addEventListener("click", () => {
  const currentColor = document.body.style.backgroundColor;

  if (!currentColor || currentColor == "white") {
    changeBackgroundColor("black");
    themeButton.innerText = "Light Mode";
  } else {
    changeBackgroundColor("white");
    themeButton.innerText = "Dark Mode";
  }
});
