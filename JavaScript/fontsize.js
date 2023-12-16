function aumentaZoom(){
    var textbody = document.querySelectorAll("body");
    for (let c = 0; c < textbody.length; c++){
        var textbody = document.querySelector("body");
        const elemento=document.querySelectorAll("body")[c];
        elemento.style.fontSize = parseInt(getComputedStyle(elemento)["font-size"]) + c + 1 + "px";
    }}

function diminuiZoom(){
    var textbody = document.querySelectorAll("body");
    for (let c = 0; c < textbody.length; c++){
        var textbody = document.querySelector("body");
        const elemento=document.querySelectorAll("body")[c];
        elemento.style.fontSize = parseInt(getComputedStyle(elemento)["font-size"]) + (-c) + -1 + "px";
    }}

	

window.onload = function() {
    var botoes = document.querySelectorAll("button");
    for (let i = 0; i < botoes.length; i++) {
        botoes[0].addEventListener("click", aumentaZoom);
        botoes[1].addEventListener("click", diminuiZoom);
    }}