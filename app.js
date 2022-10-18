//UI elements
const taskInput = document.getElementById("task-input")
const taskSubmit = document.getElementById("task-submit")
const taskList = document.getElementById("tasks") 
const erase = document.getElementById("delete")

allEventListeners()

function allEventListeners(){
    FormData.addEventListener('submit', addTask)
}

function addTask(e){
    if(taskInput.value === ''){
        alert('Add a Task Please')
    }
}


















