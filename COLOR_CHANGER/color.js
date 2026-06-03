let h1 = document.getElementById('title');
let Background_box = document.getElementById('color_background');
let hex_color = document.getElementById('color_name');
let btn1 = document.getElementById('btn');

function generateColor() {

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let rgbFinalColor = `rgb(${red},${green},${blue})` ;

    Background_box.style.backgroundColor = rgbFinalColor ; 

    if(hex_color) {

        hex_color.innerText = rgbFinalColor ;
        hex_color.style.color = rgbFinalColor;
    }

    if(h1){

        h1.style.color = rgbFinalColor;
    }

}

btn1.addEventListener("click" , generateColor)

