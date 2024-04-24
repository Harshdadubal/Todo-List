document.getElementById('add-button').addEventListener('click', addTask);
document.getElementById('todo-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('todo-input');
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        const todoList = document.getElementById('todo-list');
        const listItem = document.createElement('li');
        listItem.className = 'todo-item';
        
        const taskTextNode = document.createTextNode(taskText);
        listItem.appendChild(taskTextNode);
        
        listItem.addEventListener('click', function () {
            this.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            this.parentNode.remove();
        });

        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);

        taskInput.value = '';
    }
}