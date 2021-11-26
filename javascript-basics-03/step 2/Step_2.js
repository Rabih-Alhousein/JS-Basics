var show= document.querySelector("#show"),
hide = document.querySelector("#hide"),
text = document.querySelector("#texte");

function showhide() {
    hide.addEventListener("click", function(){
        text.style.display = "none";
    })
    show.addEventListener("click", function(){
        text.style.display = "initial";
    })
}

showhide()





/* var show = document.querySelector("#show");
var hide = document.querySelector("#hide");
var texte = document.querySelector("#texte");

function showHide(){
    hide.addEventListener("click", function(){
        texte.style.display = "none";
    });

    show.addEventListener("click", function(){
        texte.style.display = "block";
    });
}

showHide(); */