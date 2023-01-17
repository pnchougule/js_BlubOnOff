// let btn = document.getElementById("btnOnOff");
// let bulbOn = document.getElementById("on");
// let bulbOff = document.getElementById("off");
 
// btn.addEventListener("click", function (){
//     bulbOn.classList.toggle("display-on");  
//     bulbOff.classList.toggle("display-off");  
// });

let a = document.getElementById("boxId");

// a.addEventListener("click", function(){
//     setInterval(async function (){
//         a.classList.toggle("box");
//     }, 300)
// });

setInterval(async function (){
    a.classList.toggle("box");
}, 300)

