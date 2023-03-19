const form = document.querySelector('.form');
const input = document.querySelector('.input');
const taskList = document.querySelector('.todo-list');
const addButton = document.querySelector('.addbutton');

let tasks = [];

addButton.onclick=
function() {
  if (input.value.length == 0) {
    alert("Please input a task for today.")
  } 
}


function addTask(event) {
  event.preventDefault();
  const task = input.value;
  if (task !== '') {
    tasks.push(task);
    displayTasks();
    input.value = '';
  }
}

function displayTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${task}</span>
        <button class="delete-button" data-index="${index}">Delete</button>
      `;
      taskList.insertBefore(li, taskList.firstChild);
    });
  }
  

function deleteTask(event) {
  if (event.target.matches('.delete-button')) {
    const index = event.target.dataset.index;
    tasks.splice(index, 1);
    displayTasks();
  }
}

form.addEventListener('submit', addTask);
taskList.addEventListener('click', deleteTask);
