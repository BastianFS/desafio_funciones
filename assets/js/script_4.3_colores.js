var color
var color2
let ele = document.getElementById("key");
let ele2 = document.getElementById("key2");
function pintar(color){
    ele.style.backgroundColor = color;
}
function pintar2(color){
    ele2.style.backgroundColor = color2;
}
document.addEventListener('keydown', function(event){

if (event.key === 'a') {
   color = "pink";
   pintar(color);
}
else if (event.key === 's') {
    color = "orange";
    pintar(color);
 }
else if (event.key === 'd') {
    color = "lightblue";
    pintar(color);
 }
})
document.addEventListener('keydown', function(event){

if (event.key === 'q') {
       color2 = "purple";
       pintar2(color2);
    }
else if (event.key === 'w') {
        color2 = "grey";
        pintar2(color2);
     }
else if (event.key === 'e') {
        color2 = "brown";
        pintar2(color2);
     }
    })