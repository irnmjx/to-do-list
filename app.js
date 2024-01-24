const inputText = document.querySelector(".input-text");
const todoList = document.querySelector(".todo-list");

inputText.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const a = document.createElement("li");
    a.innerHTML = `<input type="checkbox" id="checkbox"><label for="checkbox">${inputText.value}</label>`;
    todoList.appendChild(a);
    inputText.value = "";
  }
});

// const deleteButton = document.querySelector("button");

// deleteButton.addEventListener("click", function () {});
