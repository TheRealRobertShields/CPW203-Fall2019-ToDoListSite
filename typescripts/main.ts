/**
 * Represents a single task on a todo list
 */
class ToDoItem{
    title:string;
    deadline:Date;
    isCompleted:boolean;

    constructor(task:string){
        this.title = task;
    }
}

let myItem = new ToDoItem("Finish class");

window.onload = function(){
    let addBtn = <HTMLElement>document.querySelector("form > input[type=button]");
    addBtn.onclick = main;
}

function main(){
    let item:ToDoItem = getItem();

    // Display new ToDoItem on page
    displayToDoItem(item);
    // Save ToDoItem
}

/**
 * Gets the user input todo item from the form.
 */
function getItem():ToDoItem{
    // Get all input from form and return ToDoItem
    let title = (<HTMLInputElement>document.getElementById("title")).value;
    let item = new ToDoItem(title);
    let deadline = (<HTMLInputElement>document.getElementById("deadline")).value;
    item.deadline = new Date(deadline);
    item.isCompleted = false;
    return item;
}

/**
 * Displays ToDoItem on the page
 * @param item The item to be displayed
 */
function displayToDoItem(item:ToDoItem):void{
    let div = document.createElement("div");
    div.innerHTML = '<input type="checkbox">' + item.title;
    div.onclick = markAsComplete;
    let displayDiv = document.getElementById("todo");
    displayDiv.appendChild(div);
}

/**
 * Move clicked task to completed section of the web page
 */
function markAsComplete(){
    console.log("you clicked this div");
    let currItem = <HTMLElement>this;
    let completedItems = document.getElementById("completed");
    completedItems.appendChild(currItem);
}