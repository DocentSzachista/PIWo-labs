"use-strict"



// section for script wide variables
let todoList = [];
let trashElement = {};


// section for functions 



const addElement  = () => {
    const input = document.getElementById("todo-input");
    if(input.value ===""){
        alert("No input provided");
        return;
    }
    const select = document.getElementById("list-select");
    console.log(select.value);
    if(select.value === "select"){
        console.warn("You didn't choose an option");
        return;
    }
    const todo = {
        list: select.value,
        content: input.value,
        id: Date.now(),
    };
    todoList.push(todo);
    input.value = "";
    render();
};

const render = () => {
    document.getElementById("todo-list").innerHTML="";
    document.getElementById("important-list").innerHTML="";
    for (const todo of todoList){
        const newLi = liElement(todo);
        document.getElementById(todo.list).appendChild(newLi);
    }
};

const liElement = (todo)=>{
    const newLi = document.createElement("li");
    newLi.className="nested-cell";
    
    const todoDiv = document.createElement("div");
    todoDiv.innerHTML = todo.content;
    todoDiv.className = "span";
    
    const dateSpan = document.createElement("span");
    const buttonsDiv = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener("click", ()=>{
        if(checkbox.checked)
        {
            todoDiv.style.textDecoration = "line-through";
            dateSpan.innerHTML = getDate();        
        }
        else{
            todoDiv.style.textDecoration = "";
            dateSpan.innerHTML = "";
        }
    });

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", `${todo.id}`);
    deleteButton.className = "btn btn-danger";
    deleteButton.innerHTML = " X ";
    deleteButton.addEventListener("click", ()=>{
        
        // to delete element from array 
        todoList =  $.grep(todoList, function(e){return e.id === todo.id }, true);
        render();
        trashElement = todo;
        renderTrash();
    });
    todoDiv.appendChild(dateSpan);
    buttonsDiv.appendChild(checkbox);
    buttonsDiv.appendChild(deleteButton);
    newLi.appendChild(todoDiv);
    newLi.appendChild(buttonsDiv);
    // newLi.appendChild(dateSpan);
    // newLi.appendChild(checkbox);
    // newLi.appendChild(deleteButton);
    return newLi;
};

const renderTrash = () => {
    const list = document.getElementById("rubbish");
    list.innerHTML="";
    const newLi = document.createElement("li");
    newLi.setAttribute("id", trashElement.id);
    const todoElement = document.createElement("div");
    newLi.className="nested-cell";
    todoElement.innerHTML = trashElement.content;
    const deleteDiv = document.createElement("div");
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = " X ";
    deleteButton.className = "btn btn-warning";
    deleteButton.addEventListener("click", ()=>{
        $('#modal').toggle();
        
    });
    newLi.appendChild(todoElement);
    deleteDiv.appendChild(deleteButton);
    newLi.appendChild(deleteDiv);
    
    list.appendChild(newLi);
};

const returnTodo = () =>{
    if($.isEmptyObject(trashElement)!== true)
    {
        todoList.push(trashElement);
        trashElement = {};
        $("#rubbish").html("");
        render();
        console.log(todoList);
    }
};

const remove = (toRemove)=>{
    if(toRemove){
        $(`#${trashElement.id}`).remove();
        trashElement = {};
    }
    $("#modal").toggle();
};

const onProvidingInput = () =>{
    const retrievedContent = document.getElementById("todo-input").value;
    const button = document.getElementById("add-button");
    if(retrievedContent !== ""){
        button.disabled = false;
    } else{
        button.disabled = true;
    }
};

const getDate = () =>{
    const date= new Date();
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDay()}`;
};

const filter = () =>{
    const retrievedContent = document.getElementById("filter-todo").value;
    const select = document.getElementById("filter-select");
    const selected = select.value;
    
    const list = document.getElementsByClassName("span");
    const length = list.length;
    
    for(let i = 0 ; i<length; i++){
        if(list[i].parentNode.parentNode.id === selected){
            if(!list[i].textContent.toUpperCase().includes(retrievedContent.toUpperCase())){
                list[i].parentNode.style.display = "none";
            } else{
                list[i].parentNode.style.display = "";
            }
        }
    }
};