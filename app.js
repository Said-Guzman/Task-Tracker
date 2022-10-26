//UI elements
const taskInput = document.querySelector('#task-input')
const form = document.querySelector('#task-form')
const taskSubmit = document.querySelector("#task-submit")
const taskList = document.getElementById('tasks') 


allEventListeners()

function allEventListeners(){

    //DOM Content Loader
    document.addEventListener('DOMContentLoaded', getTasks)

    //add task
    form.addEventListener('submit', addTask)

    //remove task
    taskList.addEventListener('click',removeTask)
}
    
//get task from local storage
    function getTasks(){
        let tasks
        if(localStorage.getItem('tasks') === null){
            tasks = []
        }
        else{
            tasks = JSON.parse(localStorage.getItem('tasks'))
        }
        for (let task of tasks){
            const li = document.createElement("li");
            li.className = 'tasks';
            li.appendChild(document.createTextNode(task));
    
            //create an element
            const a = document.createElement('a')
            a.className = 'delete'
            a.innerHTML = ' &nbsp &nbsp <i></i>'
    
            li.appendChild(a)
    
            //append li to ul 
            taskList.append(li)
        }
    }





// adds tasks
function addTask(e){
    if(taskInput.value === ""){
        alert('Add a Task Please');
            return;
            
} 
        // create li element
        const li = document.createElement("li");
        li.className = 'theTask';
        li.appendChild(document.createTextNode(taskInput.value));

        //create an element
        const a = document.createElement('a')
        a.className = 'delete'
        a.innerHTML = ' &nbsp &nbsp <i></i>'

        li.appendChild(a)
 
        //append li to ul 
        taskList.append(li)


        //add task to local storage
        addLocal(taskInput.value)


        e.preventDefault()
    
}

    function addLocal(task){
        let tasks
            if(localStorage.getItem('tasks') === null){
                tasks = []
            }
        else{
            tasks = JSON.parse(localStorage.getItem('tasks'))
            }
            tasks.push(task)
            
            localStorage.setItem('tasks', JSON.stringify(tasks))
        }   


function removeTask(e){
   if(e.target.parentElement.classList.contains('delete')){
    e.target.parentElement.parentElement.remove()

    removeLocal(e.target.parentElement.parentElement)

   } 
}
    function clearTask(){
        taskList.innerHTML = ''
    }




 //remove from the local storage
 function removeLocal(taskItem){
    let tasks
    if(localStorage.getItem('tasks') === null){
        tasks = []
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach(function(task, index){
        if(taskItem.textContent === tasks){
            task.splice(index, 1)
        }
        localStorage.removeItem('tasks', JSON.stringify(tasks))
    })

 }





