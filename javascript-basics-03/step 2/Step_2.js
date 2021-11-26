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
