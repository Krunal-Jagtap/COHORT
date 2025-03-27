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

    // Adding Complete Button
    const completeButton = document.createElement("button");
    completeButton.innerText = "✅";

    completeButton.style.backgroundColor = "transparent";
    completeButton.style.border = "none";
    completeButton.style.cursor = "pointer";

    li.appendChild(completeButton);

    completeButton.addEventListener("click", () => {
      li.classList.add("task-completed");
    });

    // Delete Button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "❌";

    deleteButton.style.backgroundColor = "transparent";
    deleteButton.style.border = "none";
    deleteButton.style.cursor = "pointer";

    li.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
      li.remove();
    });
  }
});
