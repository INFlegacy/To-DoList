 

//  function Add(){
//    let inputData = document.getElementById("inputBx");
//    const inputText = inputData.value.trim();
   

//     if(inputText !== ""){
//       const list = document.getElementById("list");
//       const li = document.createElement("li");
//       li.innerHTML =`${inputText} <button onclick="removeTask(this)">Delete</button>`;
//       list.appendChild(li);
//       inputData.value ="";
//     }
//  }

function addTask() {
   const taskInput = document.getElementById('taskInput');
   const taskText = taskInput.value.trim();
 
   if (taskText === '') {
     alert('Please enter a task.');
     return;
   }
 
   const taskList = document.getElementById('taskList');
   const li = document.createElement('li');
   li.innerHTML = `
     ${taskText} <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
   `;
   taskList.appendChild(li);
 
   taskInput.value = '';
 }
 
 function deleteTask(button) {
   const taskList = document.getElementById('taskList');
   const li = button.parentElement;
   taskList.removeChild(li);
 }
 