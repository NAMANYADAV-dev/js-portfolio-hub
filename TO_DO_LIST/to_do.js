let add = document.getElementById('btn');
let input = document.getElementById('to_do_list');
let listItem = document.getElementById('list');

add.addEventListener("click" ,function () {
    
    let inputValue = input.value;

    if(inputValue.trim() === "") {

        alert("please enter valid value ")
        return ; 

    }


    let createLi = document.createElement('li');

    let deleteBtn = document.createElement('button');
     let markbtn = document.createElement('button');

    deleteBtn.innerText = "Delete";
    markbtn.innerText = "Mark";

    createLi.innerText = inputValue ;

    listItem.appendChild(createLi)
    
    createLi.appendChild(deleteBtn) ; 

    createLi.appendChild(markbtn);
    
    deleteBtn.addEventListener("click" , function() {
    
        createLi.remove();
    
    })

    markbtn.addEventListener("click" , function() {

         createLi.style.color = "green";

    })

    input.value = "";
    
});

