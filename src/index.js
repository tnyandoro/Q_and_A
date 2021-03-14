import _ from 'lodash';
import './style.css';

// My Selectors 
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// My Event Listeners 
todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener("click", filterTodo);

// My Functions 

function addTodo(e) {
  // Prevent form from submitting  
  e.preventDefault();
  // Create ToDo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

//  Create the Li    
const newTodo = document.createElement("li");
newTodo.innerText = todoInput.value;
newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo);

// Add todo to local storageName
saveLocalTodos();

// Create the buttons for edit completed delete button
const completedButton = document.createElement("button");
completedButton.innerHTML = `<i class="fas fa-check"></i>`;
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);

// Create the buttons for edit completed delete button
const trashButton = document.createElement("button");
trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);

//attach final Todo
todoList.appendChild(todoDiv);
// Clear todo inputvalue 
todoInput.value = "";
}

// Delete 
function deleteCheck(e) {
  const item = e.target;
  // remove from todo
  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener('transitionend', () => {
      todo.remove();
    })
    
  }
  // check item
  if (item.classList[0] === "complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function(todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
        case "uncompleted":
          if(!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
    }
  });
}

function saveLocalTodos(todo) {
   // Check the status of your local storage
   let todos = [];
   if (localStorage.getItem('todos') === null) {
     todos = [];
   }else{
     todos = JSON.parse(localStorage.getItem('todos'));
   }
   todos.push(todo);
   localStorage.setItem('todos', JSON.stringify(todos));
  };
 