
//furin program
let canvas = document.getElementById("huurin");
let context = canvas.getContext("2d");

let image = new Image();
image.setAttribute("src", "./image/fuurin.png");

const image_X = canvas.width / 2.5;
const image_Y = canvas.height / 3.5;

let huurin_sound = new Audio("./Audio/furin.mp3");

image.addEventListener("load", function(){
    context.drawImage(this, image_X, image_Y, image.width, image.height)
});

setInterval(function(){
    let rand_result=Math.floor(Math.random()*100+1);
    if(rand_result<35)
        huurin_sound.play();
}, 3000);
