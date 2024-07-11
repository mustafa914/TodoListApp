//Select elements from the DOM
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

// Function to add tasks to the todo lisst
function addTask() {
    if (todoInput.value.trim() === "") {
        alert("You must write something!");
    }
    else {
        const li = document.createElement("li");
        li.innerHTML = todoInput.value;
        const delButton = document.createElement("button");
        delButton.innerHTML = "Delete";
        li.appendChild(delButton);
        delButton.addEventListener("click", (e) => { delTask(li); })
        todoList.appendChild(li);
    }
    todoInput.value = "";
    saveData();
}

//Function to delete tasks from the todo list
function delTask(li) {
    todoList.removeChild(li);
    saveData();
}

function saveData() {
    localStorage.setItem("tasks", todoList.innerHTML);
}

function retrieveData() {
    todoList.innerHTML = localStorage.getItem("tasks");

    //Replacing delete button with span now
    // //So delete button still works when page is refreshed
    // const delButtons = todoList.querySelectorAll("button");
    // delButtons.forEach((button, index) => {
    //     button.addEventListener("click", () => {
    //         const li = button.parentElement;
    //         delTask(li);
    //     });
    // })
}

retrieveData();



