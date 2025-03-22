// Access
const input = document.querySelector("#todo_Input");
const addButton = document.querySelector("#add_Task_Btn");
const todoItems = document.querySelector("#todo_Items");

addButton.addEventListener("click", () => {
  //  Got Input Value
  const value = input.value;

  if (!value) {
    alert(`Write your task before adding`);
  } else {
    //  Create List element
    const li = document.createElement("li");
    //  Insert Value in li
    li.innerText = value;
    // show li
    todoItems.appendChild(li);
    //  clear input value to add next value
    input.value = "";

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";

    li.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
      li.remove();
    });
  }
});
