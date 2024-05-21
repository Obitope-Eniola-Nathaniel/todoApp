const input = document.querySelector('#input')
const mark = document.querySelector('#mark')
const todoOutput = document.querySelector('.todo-outputs')



let todoItems = [];

// get input user todoItem

function getInput() {
    const todo = input.value
    if (todo.trim() === ''){
        alert('Please input a todo!');
    }
    // todoItem.push(todo)
 
    const newTodo = {
        item: todo
    };

    todoItems.push(newTodo);
    console.log(newTodo)
    input.value = ""
    return todo
}


// function displayItems(items) {
//     const tag = document.createElement("div")
//     const tagItem = document.createTextNode(items)
//     tag.style.display = 'inline-block'
//     tag.appendChild(tagItem)
//     // tag.textContent = items
//     todoOutput.appendChild(tag)
//     // console.log(tag)
//     // deleteFuntion()
// }

function displayItems(todos) {
    const tag = document.createElement("div");
    tag.className = "new-todo";
    tag.innerHTML = `${todos}`;
    todoOutput.append(tag);
    const btn = document.createElement("img");
    btn.src = 'btn1.png';
    btn.height = 25;
    btn.width = 25;
    tag.append(btn);

    btn.addEventListener('click', ()=> {
        tag.remove()
    })
    const input = document.createElement("input");
    input.type = "checkbox";
    tag.prepend(input);
}

// function deleteFuntion() {
//     let tag = document.createElement("button")
//     let tagItem = document.createTextNode('x')
//     tag.appendChild(tagItem)
//     // tag.textContent = items
//     todoOutput.appendChild(tag)
// }

function selectAllTodo() {
    const todosList = todoOutput.querySelectorAll('div')
    console.log(todosList)

}

// store it in the array
// display the items in the array

mark.addEventListener('click', ()=> {
    todos = getInput()
    displayItems(todos)
    // console.log(todos)
    selectAllTodo()
   
   
})