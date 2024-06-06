    let ele = document.getElementById("ele1");
    ele.style.backgroundColor = "green";
    function pintar(color){
        ele.style.backgroundColor = color;
    }
    ele.addEventListener("click", function(){
        pintar("yellow");
    })