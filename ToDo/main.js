/*
student homework 

1- if input is empty use sweet alert to alert use
2- check if task already exist
3- create delete all tasks button
4- create finished all tasks 
5-add tasks to local storage
*/

//first set up variables

let theInput =document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let taskContainer = document.querySelector(".tasks-content");

let tasksCount = document.querySelector(".task-count span");
let tasksCompleted = document.querySelector(".task-completed span");

//focus on input fields first on opeining the page
window.onload = function(){
    theInput.focus();
};


//adding tasks

theAddButton.onclick = function(){
    //if input is empty
    if(theInput.value ==''){
console.log('no value');
    }else{
        

        let noTaskMsg = document.querySelector(".no-tasks-message");

        //check if span message exists (not tasks message)
        if (document.body.contains(document.querySelector('.no-tasks-message'))){
             //remove "no tasks message"
        noTaskMsg.remove();
        
        }
       
        //create span element
        let mainSpan = document.createElement("span");

        //create delete button
        let deleteElement = document.createElement('span');

        //create text to show user to do input
        let text = document.createTextNode(theInput.value);
        
         //create text the delete button text 
         let deleteText = document.createTextNode('delete');
        
         // add input to textinput
         mainSpan.appendChild(text);

         //add class to textinput
         mainSpan.className = 'task-box';

            //add delete text to delete element 
         deleteElement.appendChild(deleteText);

         //add class to delete button
         deleteElement.className = 'delete';

         //add delete button to mainspan
         mainSpan.appendChild(deleteElement);

         //finally add tasks to container
        taskContainer.appendChild(mainSpan);

        //empty the inputs after sumbiting to do button

        theInput.value ="";
        

        //after pressing add button focus will lose, so we automate it
        theInput.focus();
        
        //calculate tasks
        calculateTasks();
    }
};

document.addEventListener('click', function(e){
        //delete task
    if (e.target.className =='delete'){
        //remove current task pressed
       e.target.parentNode.remove();
    }

    //finished tasks

    if (e.target.classList.contains('task-box')){
        //toggle class finished
       e.target.classList.toggle('finished');
    }

    calculateTasks();

        //check number of tasks inside container
    if(taskContainer.children.length==0){
        createNotasks();
    }
    

});


//function to create no tasks message

function createNotasks(){

    //create message span elemnt
   let msgSpan = document.createElement('span');

   //create text message
   let msgText = document.createTextNode('no Tasks to show');

   //add text to message span elements 
   msgSpan.appendChild(msgText);

   //add class to mesasge span

   msgSpan.className = 'no-tasks-message'

   //append message span eleemtn  to task container
   taskContainer.appendChild(msgSpan);
}

//function to calculate tasks

function calculateTasks(){

    //calculate all tasks
    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

    //calculate all finished tasks
    tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
}