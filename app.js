//UI elements
const taskInput = document.querySelector('.task-input')
const form = document.querySelector('#task-form')
const taskSubmit = document.querySelector("#task-submit")
const taskList = document.getElementById("tasks") 
const erase = document.getElementById("delete")

allEventListeners()

function allEventListeners(){
    //add task
    form.addEventListener('submit', addTask)

    //remove task

}
// adds tasks
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a Task Please')

        // create li element
        const li = document.createElement('li')
        li.className = 'item'
        li.appendChild(document.createTextNode(taskInput.value))

        //create an element
        const a = document.createElement('a')
        a.className = 'delete'
        a.innerHTML = '<i>Delete</i>'

        li.appendChild(a)
        console.log(li)

        //append li to ul 
        taskList.append(li)

        e.preventDefault()

    }
}


















