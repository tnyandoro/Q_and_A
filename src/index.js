import _ from 'lodash';
import './style.css';

let addtaskinput = document.getElementById("addtaskinput");
let addtaskbtn = document.getElementById("addtaskbtn");

addtaskbtn.addEventListener("click", function(){
  addtaskinputval = addtaskinput.value;
  let webtask = localStorage.getItem("localtask");
        if(webtask == null){
            taskObj = [];
        } else{
      taskObj = JSON.parse(todoTask);
    }
   taskObj.push(addtaskinputVal);
   localStorage.setItem("localtask", JSON.stringify(taskObj));
})