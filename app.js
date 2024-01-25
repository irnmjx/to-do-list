const inputText = document.querySelector(".input-text");
const todoList = document.querySelector(".list-container");
const todo = document.querySelector(".todo");

inputText.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const li = document.createElement("li");
    li.innerHTML = `<div class="todo">${inputText.value}</div>`;
    todoList.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    inputText.value = "";
    saveData();
  }
});

todoList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", todoList.innerHTML);
}

function showTask() {
  todoList.innerHTML = localStorage.getItem("data");
}

showTask();
