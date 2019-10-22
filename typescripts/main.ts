/**
 * Represents a single task on a todo list
 */
class ToDoItem{
    title:string;
    //deadline:Date;
    //isCompleted:boolean;

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
    console.log("Main");
    let item:ToDoItem = getItem();

    // Display new ToDoItem on page

    // Save ToDoItem
}


function getItem():ToDoItem{
    // Get all input from form and return ToDoItem
}