

let list = JSON.parse(localStorage.getItem("tasks")) || [];

let inputTask = document.getElementById('to_do_list');
let addTask = document.getElementById('btn');
let ulList = document.getElementById('list');

let TotalTask = 0 ;

function saveTasks() {

    localStorage.setItem("tasks" , JSON.stringify(list));

}
addTask.addEventListener("click" , function() {

    if(inputTask.value.trim() === "") {

        alert("Enter valid Task");
        return

    }else{
        
        let inputValue = { id : ++TotalTask,
                            value: inputTask.value,
                            completed: false
                            }


            list.push(inputValue);
            saveTasks();
    };
        renderTask() ;
    
});

function renderTask() {
    
    ulList.innerHTML = "";

for(let i = 0 ; i < list.length; i++){


       let task =  list[i];

       let createLi = document.createElement('li');
       let deleteBtn = document.createElement('button');
       let markBtn = document.createElement('button');


       createLi.innerText = task.value;

       if(task.completed) {

            createLi.style.color = "green";

       }

       
       deleteBtn.innerText = "Delete";
       markBtn.innerText = task.completed ? "Undo " : "Mark";
       
       
       createLi.appendChild(deleteBtn);
       createLi.appendChild(markBtn);
       ulList.appendChild(createLi);

       deleteBtn.addEventListener("click" , function() {

           list = list.filter((task) => task.id !== list[i].id);
           saveTasks();
           renderTask();

       })

       markBtn.addEventListener("click" , () => {

           task.completed = !task.completed;

            saveTasks();
           renderTask();

       });
    
}

    inputTask.value = "";

}

renderTask();
