const form = document.querySelector("form");
const input = document.querySelector("form input");
const taskContainer = document.querySelector(".tasks");

let todos = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const todo = {
    text: input.value,
    checked: false,
    id: new Date().getTime(),
  };

  todos.push(todo);
  e.target.reset();
  displayTodos();
});

const displayTodos = () => {
  taskContainer.innerHTML = "";

  todos.forEach((todo) => {
    const taskEle = document.createElement("div");
    const inputEle = document.createElement("input");
    const textEle = document.createElement("p");
    const delButton = document.createElement("button");

    taskEle.classList.add("task");
    inputEle.classList.add("checkbox");
    textEle.classList.add("text");
    delButton.classList.add("delete");

    delButton.innerHTML = "Delete";
    textEle.innerHTML = todo.text;
    inputEle.type = "checkbox";

    delButton.addEventListener("click", () => {
      todos = todos.filter((t) => t.id !== todo.id);
      displayTodos();
    });

    inputEle.addEventListener("change", (e) => {
      todo.checked = e.target.checked;
      if (todo.checked) {
        taskEle.classList.add("done");
      } else {
        taskEle.classList.add("not done");
      }
    });

    taskEle.appendChild(inputEle);
    taskEle.appendChild(textEle);
    taskEle.appendChild(delButton);
    taskContainer.appendChild(taskEle);
  });
};
