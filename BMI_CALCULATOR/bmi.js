let container_box = document.getElementById('container');
let body = document.querySelector('body');
let height = document.getElementById('height');
let weight = document.getElementById('weight');
let submit = document.getElementById('btn');

let answer_box = document.getElementById('answer');
let waiting = document.getElementById('waiting');
let waiting_1 = document.getElementById('waiting_1');

let reset = document.getElementById('btn-1');


body.style.backgroundImage = "linear-gradient(100deg, #00c8ff 0%,   #b292fe 100%)";
body.style.fontFamily = "Poppins,  sans-serif ";


answer_box.style.display = "none"

submit.addEventListener("click" , () => {

        let hValue = Number(height.value);

        let wValue = Number(weight.value);

        if(!hValue || !wValue) {

            alert("Please enter valid height and weight!");
            return;

        }

        let height1 = hValue * hValue;

        let weight1 = wValue;

       let bmiCalculator  = ((weight1/height1) * 703).toFixed(1);


        container_box.style.display = "none";
        answer_box.style.display ="block";

       if(bmiCalculator <= 18.5) {

            waiting.innerText = "Under weight";    
            
        }else if(bmiCalculator >= 18.5 && bmiCalculator <=24.9){
            
            waiting.innerText = "Normal Weight";
           
       }else if(bmiCalculator >=25 && bmiCalculator <=29.9) {

            waiting.innerText = "Over weight";

       }else{

            waiting.innerText = "Obese";

       }

       waiting_1.innerText = bmiCalculator;

})


reset.addEventListener("click" , ()=> {

        answer_box.style.display = "none";

        
        container_box.style.display = "block";
        
        height.value = "";
        weight.value = "";
})