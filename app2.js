const input = document.querySelector('#input');
const mark = document.querySelector('#mark');
const todoOutput = document.querySelector('.todo-outputs');
const todoUpdates = document.querySelector('.todo-updates');

// Retrieve existing todos from localStorage
let todoItems = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// Update the number of todos displayed
function todoUpdate() {
    let numberOfTodo = todoItems.length;
    todoUpdates.innerHTML = `You have ${numberOfTodo} Todo${numberOfTodo !== 1 ? 's' : ''}`;
}

// Get user input and add new todo
function getInput() {
    const todo = input.value;

    if (todo.trim() === '') {
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
    todoUpdate();
}

// Add task to the DOM
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
    btn.className = 'btn-img';
    // Append the new img element to tag element
    tag.append(btn);

    // Create and event listener and bind it to an id
    btn.addEventListener('click', removeItemArray.bind(null, id));

    // Create a checkbox element
    const input = document.createElement("input");
    input.type = "checkbox";
    tag.prepend(input);
}

// Remove item from array and update DOM and localStorage
function removeItemArray(listId) {
    const listIndex = todoItems.findIndex(todo => todo.id === listId);
    if (listIndex !== -1) {
        todoItems.splice(listIndex, 1);
        localStorage.setItem('items', JSON.stringify(todoItems));
        todoOutput.children[listIndex].remove();
        todoUpdate();
    }
}

// Load existing todos on page load
todoItems.forEach(todo => addTask(todo.todoItem, todo.id));

// Bind the add todo function to the button
mark.addEventListener('click', () => {
    getInput();
    todoUpdate();
});

// Initial update
todoUpdate();
