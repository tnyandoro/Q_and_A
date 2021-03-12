import _ from 'lodash';
import './style.css';

let addtaskinput = document.getElementById("addtaskinput");
let addtaskbtn = document.getElementById("addtaskbtn");

addtaskbtn.addEventListener("click", function(){
  addtaskinputval = addtaskinput.value;
  let todoTask = localStorage.getItem("localtask");
  if(todoTask == null){
      taskObj = [];
  }else{
      taskObj = JSON.parse(todoTask);
    }
   taskObj.push(addtaskinputVal);
   localStorage.setItem("localtask", JSON.stringify(taskObj));
})
function showTask(){
  let todoTask = localStorage.getItem("localtask");
  if(todoTask == null){
      taskObj = [];
  }else{
      taskObj = JSON.parse(todoTask);
    }
}
let html = '';
let addedtasklist = getElementById("addedtasklist");