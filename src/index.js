import _ from 'lodash';
import './style.css';

const addTaskInput = document.createElementId("addtaskinput");
const addTaskBtn = document.createElementId("addtaskinput");

addtaskinput.addEventListener("click", function(e) {
  addTaskInputVal = addTaskInput.value;
  let todoTask = localStorage.getItem("localTask");
  if(todoTask === null){
      taskObject = [];
    }else{
      taskObject = JSON.parse(todoTask);
    }
   taskObject.push(addTaskInputVal);
   localStorage.setItem("localTask",taskObject);
})