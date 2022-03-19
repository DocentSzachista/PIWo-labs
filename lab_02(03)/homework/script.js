"use-strict"



// section for script wide variables
let todoList = [];
let importantTodoList = [];
let trashElement = {};


// section for functions 



const addElement  = () => {
    const input = document.getElementById("todo-input");
    if(input.value ===""){
        alert("No input provided");
        return;
    }
    const todo = {
        content: input.value,
        id: Date.now(),
    };
    const radios = document.querySelectorAll('input[name="list"]');
    let selected;
    for(const radioButton of radios){
        if(radioButton.checked){
            selected = radioButton.value;
            break;
        }
    }
   switch(selected){
       case 'normal':
           todoList.push(todo);
           break;
       case 'important':
           importantTodoList.push(todo);
           break;
       default:
           console.warn(`Option was not provided ${selected}`);
    }
    
    render(todoList, "todo-list");
    input.value = "";
};
const render = (todos, id) => {
    const list = document.getElementById(id);
    //const importantList = document.getElementById("important-list");
    // we want always to re-render whole list 
    list.innerHTML ="";
    for (const todo of todos){
        const newLi = liElement(todo);
        list.appendChild(newLi);
    }
};
const liElement = (todo)=>{
    const newLi = document.createElement("li");
    const todoSpan = document.createElement("span");
    todoSpan.innerHTML = todo.content;
    const dateSpan = document.createElement("span");
    
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener("click", ()=>{
        if(checkbox.checked)
        {
            todoSpan.style.textDecoration = "line-through";
            dateSpan.innerHTML = getDate();        
        }
        else{
            todoSpan.style.textDecoration = "";
            dateSpan.innerHTML = "";
        }
    });

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", `${todo.id}`);
    deleteButton.className = "btn btn-danger";
    deleteButton.innerHTML = " X ";
    deleteButton.addEventListener("click", ()=>{
        
        // to delete element from array 
        todoList = $.grep(todoList, function(e){return e.id === todo.id }, true);
        render(todoList);
        trashElement = todo;
        renderTrash();
      
    });

    newLi.appendChild(todoSpan);
    newLi.appendChild(dateSpan);
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteButton);
    return newLi;
};
const renderTrash = () => {
    const list = document.getElementById("rubbish");
    list.innerHTML="";
    const newLi = document.createElement("li");
    newLi.setAttribute("id", trashElement.id);
    const todoElement = document.createElement("span");
    todoElement.innerHTML = trashElement.content;
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = " X ";
    deleteButton.className = "btn btn-warning";
    deleteButton.addEventListener("click", ()=>{
        $('#modal').toggle();
        
    });
    newLi.appendChild(todoElement);
    newLi.appendChild(deleteButton);
    list.appendChild(newLi);
};



const returnTodo = () =>{
    if($.isEmptyObject(trashElement)!== true)
    {
        todoList.push(trashElement);
        trashElement = {};
        $("#rubbish").html("");
        render();
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