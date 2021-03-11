import _ from 'lodash';
import './style.css';

let addTaskInput;
addTaskInput = document.createElementId("addtaskinput");
let addTaskBtn;

addTaskBtn = document.createElementId("addtaskinput");

addTaskBtn.addEventListener("click", function(e) {
  addTaskInputVal = addTaskInput.value;
  let todoTask = localStorage.getItem("localTask");
  if(todoTask === null){
      taskObject = [];
    }else{
      taskObject = JSON.parse(todoTask);
    }
   taskObject.push(addTaskInputVal);
   localStorage.setItem("localTask", JSON.stringify(taskObject));
})