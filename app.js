// DOM Elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const emptyMsg = document.getElementById('emptyMsg');

// Add task on button click
addBtn.addEventListener('click', addTask);

// Add task on Enter key
taskInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') addTask();
});

// --- Add a new task ---
function addTask() {
    const text = taskInput.value.trim();
    if (text === '') return;

    // Create list item
    const li = document.createElement('li');
    li.className = 'task-item';

    // Checkbox to mark complete
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function () {
        li.classList.toggle('completed', checkbox.checked);
    });

    // Task text
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = text;

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '✕';
    deleteBtn.addEventListener('click', function () {
        li.remove();
        updateEmptyMsg();
    });

    // Assemble and append
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input and refocus
    taskInput.value = '';
    taskInput.focus();
    updateEmptyMsg();
}

// --- Show/hide empty message ---
function updateEmptyMsg() {
    if (taskList.children.length === 0) {
        emptyMsg.classList.remove('hidden');
    } else {
        emptyMsg.classList.add('hidden');
    }
}
