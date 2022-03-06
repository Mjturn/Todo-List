const addButton = document.getElementById("add-button");
addButton.onclick = addTodos;

function addTodos(event)
{
    event.preventDefault();
    const inputValue = document.getElementById("input").value;
    const item = document.createElement("li");
    item.setAttribute("class", "item");
    item.innerHTML = inputValue;
    const todoList = document.getElementById("todo-list");
    todoList.appendChild(item);

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "checkbox");
    const todoListContainer = document.getElementById("todo-list-container");
    item.appendChild(checkbox);

    checkbox.onchange = function(event) {
        if(event.target.checked)
        {
            item.style.textDecoration = "line-through";
        }
        else
        {
            item.style.textDecoration = "none";
        }
    }
}