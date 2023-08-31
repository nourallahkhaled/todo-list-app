const taskForm = document.getElementById("tasks-form")
const taskInput = document.getElementById("new-task")
const taskList = document.getElementById("tasks-list")

function createTaskItem(taskText){
    const li = document.createElement("li");
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    const label = document.createElement('label');
    label.textContent = taskText;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', function() {
        li.remove();
    });
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton);

    return li;
}
function handleFormSubmit(event) {
    event.preventDefault();
    const taskText = taskInput.value;

    if (taskText.trim() !== '') {
        const taskItem = createTaskItem(taskText);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
    }

taskForm.addEventListener('submit', handleFormSubmit);