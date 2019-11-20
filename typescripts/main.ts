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

/* TEST CODE HERE... */
let myItem = new ToDoItem("Learn about cookies=;.");
myItem.isCompleted = false;
myItem.deadline = new Date(2019, 9, 29);    // Oct 29th, 2019

let strData = JSON.stringify(myItem); // STRINGIFY CONVERTS ANY OBJECT INTO A JSON STRING FORMAT
console.log(strData);
Cookies.set("todoitems", strData, {expires : 7}) // SETTING A COOKIE CALLED 'TODOITEMS' THAT EXPIRES IN A WEEK
/* END TEST CODE */


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
    div.innerHTML = '<p>' + item.title;
    div.onclick = markAsComplete;
    let displayDiv = document.getElementById("todo");
    displayDiv.appendChild(div);
    div.ondblclick = removeTask;
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
function removeTask(){
    this.remove();
}