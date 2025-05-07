const addTaskButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function addTask() {
  const taskText = taskInput.value.trim();
  
  if (taskText !== "") {
    const li = document.createElement('li');
    li.textContent = taskText;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.onclick = () => markCompleted(li);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => deleteTask(li);

    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = '';
  } else {
    alert("Please enter a task.");
  }
}

function markCompleted(taskElement) {
  taskElement.classList.toggle('completed');
}

function deleteTask(taskElement) {
  taskList.removeChild(taskElement);
}

addTaskButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
