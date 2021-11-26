var green= document.querySelector(".green"),
red = document.querySelector(".red"),
blue = document.querySelector(".blue");
text = document.querySelector("#text");

function color() {

    green.addEventListener("click", function(){
        text.style.color = "green";
    })
    red.addEventListener("click", function(){
        text.style.color = "red";
    })
    blue.addEventListener("click", function(){
        text.style.color = "blue";
    })
    
}

color();
