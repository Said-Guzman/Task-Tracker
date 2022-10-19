//UI elements
const taskInput = document.querySelector('#task-input')
const form = document.querySelector('#task-form')
const taskSubmit = document.querySelector("#task-submit")
const taskList = document.getElementById('tasks') 


allEventListeners()

function allEventListeners(){
    //add task
    form.addEventListener('submit', addTask)

    //remove task
    taskList.addEventListener('click',removeTask)
}
// adds tasks
function addTask(e){
    if(taskInput.value === ""){
        alert('Add a Task Please');
            return;
            
} 
        // create li element
        const li = document.createElement("li");
        li.className = 'tasks';
        li.appendChild(document.createTextNode(taskInput.value));

        //create an element
        const a = document.createElement('a')
        a.className = 'delete'
        a.innerHTML = ' &nbsp &nbsp <i>Delete</i>'

        li.appendChild(a)

        //append li to ul 
        taskList.append(li)

        e.preventDefault()
    
}

function removeTask(e){
   if(e.target.parentElement.classList.contains('delete')){
    e.target.parentElement.parentElement.remove()
   } 
}















