const input = document.querySelector('#input')
const mark = document.querySelector('#mark')
const todoOutput = document.querySelector('.todo-outputs')
const todoUpdates = document.querySelector('.todo-updates')


let todoItems = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];



// localStorage.clear();

function todoUpdate() {
    let numberOfTodo = todoItems.length;
    todoUpdates.innerHTML = `You have ${numberOfTodo} Todo`;
}


// get input user todoItem
function getInput() {
    const todo = input.value;

    if (todo.trim() === ''){
        alert('Please input a todo!');
        return;
    }

    const newTodo = {
        id: Math.random().toString(),
        todoItem: todo
    };


    todoItems.push(newTodo);
    localStorage.setItem('items', JSON.stringify(todoItems));

    addTask(newTodo.todoItem, newTodo.id);
    input.value = "";
}



// Load existing todos on page load
todoItems.forEach(todo => addTask(todo.todoItem, todo.id));
function addTask(todo, id) {
    // Create a new element
    const tag = document.createElement("div");
    tag.className = "new-todo";
    tag.innerHTML = `${todo}`;
    // Append the new created element to todoOutput
    todoOutput.append(tag);

    // Create an Image element
    const btn = document.createElement("img");
    btn.src = 'btn1.png';
    btn.height = 25;
    btn.width = 25;
    btn.className = 'btn-img'
    // Append the new img element to tag element
    tag.append(btn);

    // Create and event listner and bind it to an id
    btn.addEventListener('click', removeItemArray.bind(null, id));

    // Create a check box element
    const input = document.createElement("input");
    input.type = "checkbox";
    tag.prepend(input);
}


function removeItemArray(listId) {
    let listIndex = 0;
    for (const list of todoItems) {
        if (list.id === listId) {
            break;
        }
        listIndex++;
    }
    todoItems.splice(listIndex, 1);
 
    todoOutput.children[listIndex].remove();
    localStorage.setItem("items", JSON.stringify(todoItems));
    todoUpdate()
}



function selectAllTodo() {
    const todosList = todoOutput.querySelectorAll('div');
    // console.log(todosList)
}

// store it in the array
// display the items in the array

mark.addEventListener('click', ()=> {
    getInput()
    selectAllTodo()
    todoUpdate()
})



// localStorage.clear();
console.log(todoItems)