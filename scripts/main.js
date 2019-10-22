"use strict";
/**
 * Represents a single task on a todo list
 */
var ToDoItem = /** @class */ (function () {
    //deadline:Date;
    //isCompleted:boolean;
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
    // Save ToDoItem
}
function getItem() {
    // Get all input from form and return ToDoItem
}
