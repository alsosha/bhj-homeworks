const addBtn = document.querySelector('.tasks__add');
const tasksInput = document.querySelector('.tasks__input');
const tasksList = document.querySelector('.tasks__list');

addBtn.addEventListener('click', tasksAdder);

function tasksAdder(event) {
    event.preventDefault();

    taskText = tasksInput.value;

    const task = document.createElement('div');
    task.className = 'task';
    task.innerHTML = `<div class="task__title">${taskText}</div><a href="#" class="task__remove">&times;</a>`;
    
    tasksList.appendChild(task);

    tasksInput.value = '';

    const taskRemove = task.querySelector('.task__remove');
    taskRemove.addEventListener('click', tasksRemover);
}

function tasksRemover(event) {
    event.preventDefault();

    const taskRemove = event.target;
    const task = taskRemove.parentElement;

    task.remove();
}