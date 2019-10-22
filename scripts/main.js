/**
 * Represents a single task on a todo list
 */
var ToDoItem = /** @class */ (function () {
    function ToDoItem(task) {
        this.title = task;
    }
    return ToDoItem;
}());
var myItem = new ToDoItem("Finish class");
window.onload = function () {
    var addBtn = document.querySelector("form > input[type=button]");
    addBtn.onclick = main;
};
function main() {
    console.log("Main");
    var item = getItem();
    // Display new ToDoItem on page
    displayToDoItem(item);
    // Save ToDoItem
}
/**
 * Gets the user input todo item from the form.
 */
function getItem() {
    // Get all input from form and return ToDoItem
    var title = document.getElementById("title").value;
    var item = new ToDoItem(title);
    var deadline = document.getElementById("deadline").value;
    item.deadline = new Date(deadline);
    item.isCompleted = false;
    return item;
}
/**
 * Displays ToDoItem on the page
 * @param item The item to be displayed
 */
function displayToDoItem(item) {
    var div = document.createElement("div");
    div.innerHTML = '<input type="checkbox">' + item.title;
    div.onclick = markAsComplete;
    var displayDiv = document.getElementById("todo");
    displayDiv.appendChild(div);
}
/**
 * Move clicked task to completed section of the web page
 */
function markAsComplete() {
    console.log("you clicked this div");
    var currItem = this;
    var completedItems = document.getElementById("completed");
    completedItems.appendChild(currItem);
}
