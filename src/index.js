import _ from 'lodash';
import './style.css';

// My Selectors 
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// My Event Listeners 
todoButton.addEventListener('click',addTodo);

// My Functions 

function addTodo(event) {
  // Prevent form from submitting  
  event.preventDefault();
  // Create ToDo Div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

//  Create the Li    
const newTodo = document.createElement('li');
newTodo.innerText = 'Hey';
newTodo.classList.add('todo-item');

// Append a child of the todoDiv 
todoDiv.appendChild(newTodo);

// Create the buttons for edit completed delete button
const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class="fas fa-check"></i>'
}