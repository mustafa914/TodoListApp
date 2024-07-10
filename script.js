const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (todoInput.value.trim() !== "") {
        const inputValue = todoInput.value;
        const li = document.createElement("li");
        const node = document.createTextNode(inputValue);
        li.appendChild(node);

        const delButton = document.createElement("button");
        delButton.textContent = "Delete";
        delButton.addEventListener("click", (e) => { todoList.removeChild(li); });
        li.appendChild(delButton);

        todoList.appendChild(li);
        todoInput.value = "";
    }

});

function() {

}
