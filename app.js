

async function main() {
    
    let response = await fetch('http://127.0.0.1:4000');
    let data = await response.json();
    console.log(data);





    const taskInput = document.querySelector('#task-input')
    const form = document.querySelector('#task-form')
    const taskSubmit = document.querySelector("#task-submit")
    const taskList = document.getElementById('tasks') 
    const theTask = document.querySelector('task')

    allEventListeners()

    function allEventListeners(){
    
        //add task
        form.addEventListener('submit', addTask)
    
        //remove task
        taskList.addEventListener('click',removeTask)
    }






    function addTask(e){
        if(taskInput.value === ""){ 
            alert('Add a Task Please');
                return;
        
} 
    // create li element
    const li = document.createElement("li");
    li.className = 'task';
    li.appendChild(document.createTextNode(taskInput.value));
            const a = document.createElement('a')
            a.className = 'delete'
            a.innerHTML = ' &nbsp &nbsp <i></i>'
            li.appendChild(a)

 
            //append li to ul 
            taskList.append(li)
      

async function posting(){
        const data = taskInput.value
        const options = {
            method: 'POST',
            Headers:{
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(data)
        }
 
       await fetch('/', options)}

            posting()

            e.preventDefault()
}



        }



        function removeTask(e){
            if(e.target.parentElement.classList.contains('delete')){
             e.target.parentElement.parentElement.remove()
            } 
         }

         

    // Replace this
    // var list = document.createElement("li");
    // var text = document.createTextNode(data[0].description);
    // list.appendChild(text);
    // var element = document.getElementById("tasks");
    // element.appendChild(list);

    // for (let d of data) {
    //     addTask(d.description)
    // }

main();




















