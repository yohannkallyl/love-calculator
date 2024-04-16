//parte da animação .card

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector(".card").classList.add("show");

});

window.onload = function(){
    let botao = document.getElementById("calcular")
    botao.addEventListener("click", calculoAmor)
}

function calculoAmor(){
    let seuNome = document.getElementById("seu-nome").value
    let nomeCrush = document.getElementById("nome-crush").value

    if(seuNome.length === 0 || nomeCrush.length === 0){
        alert("[ERRO] Faltam informações!")
    } else{
        alert("Tudo certo")
    }

}

