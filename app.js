// const inputText = document.querySelector(".input-text");
// const todoList = document.querySelector(".todo-list");

// inputText.addEventListener("keydown", function (event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     const a = document.createElement("li");
//     a.innerHTML = `<input type="checkbox" id="checkbox"><label for="checkbox">${inputText.value}</label>`;
//     todoList.appendChild(a);
//     inputText.value = "";
//   }
// });

const inputText = document.querySelector(".input-text");
const todoList = document.querySelector(".todo-list");

let checkboxCount = 0;

inputText.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    checkboxCount++;
    const a = document.createElement("li");
    a.innerHTML = `<input type="checkbox" id="checkbox${checkboxCount}"><label for="checkbox${checkboxCount}">${inputText.value}</label>`;
    todoList.appendChild(a);
    inputText.value = "";
  }
});

// You can add this part to add numbers to existing checkboxes
const checkboxes = document.querySelectorAll("input[type='checkbox']");
for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].id = `checkbox${i + 1}`;
  checkboxes[i].nextElementSibling.setAttribute("for", `checkbox${i + 1}`);
}

const deleteButton = document.querySelector("button");

deleteButton.addEventListener("click", function () {});
