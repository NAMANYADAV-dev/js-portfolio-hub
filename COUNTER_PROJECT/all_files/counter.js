const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const counterBox = document.getElementById('counter_box');
const resetButton = document.getElementById('btn');

let counter = 0 ;

add.addEventListener("click" , function(){

    counter++;
    counterBox.innerText = counter;
 


});

subtract.addEventListener("click" , function(){
   
    counter--;
    counterBox.innerText = counter;

})


resetButton.addEventListener("click" , ()=> {
  
    counterBox.innerText = 0 ;

})


