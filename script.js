const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
var todoList = document.getElementById("todoList");

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (todoInput.value.trim() !== "") {
        var inputValue = todoInput.value;
        let li = document.createElement("li");
        var node = document.createTextNode(inputValue);
        li.appendChild(node);
        todoList.appendChild(li);
        todoInput.value = "";
    }

});

to