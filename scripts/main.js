/**
 * Represents a single task on a todo list
 */
var ToDoItem = /** @class */ (function () {
    function ToDoItem(task) {
        this.title = task;
    }
    return ToDoItem;
}());
/* TEST CODE HERE... */
var myItem = new ToDoItem("Learn about cookies=;.");
myItem.isCompleted = false;
myItem.deadline = new Date(2019, 9, 29); // Oct 29th, 2019
var strData = JSON.stringify(myItem); // STRINGIFY CONVERTS ANY OBJECT INTO A JSON STRING FORMAT
console.log(strData);
Cookies.set("todoitems", strData, { expires: 7 }); // SETTING A COOKIE CALLED 'TODOITEMS' THAT EXPIRES IN A WEEK
/* END TEST CODE */
window.onload = function () {
    var addBtn = document.querySelector("form > input[type=button]");
    addBtn.onclick = main;
};
function main() {
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
    div.innerHTML = '<p>' + item.title;
    div.onclick = markAsComplete;
    var displayDiv = document.getElementById("todo");
    displayDiv.appendChild(div);
    div.ondblclick = removeTask;
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
function removeTask() {
    this.remove();
}
