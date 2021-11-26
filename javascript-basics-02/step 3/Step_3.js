var div = document.querySelector("#div"),
    input = document.querySelector("#name");

input,onkeyup = function () {
    div.innerHTML = input.value;
}