

//parte da animação .card

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector(".card").classList.add("show");
    

});

window.onload = function(){
    let botao = document.getElementById("calcular")
    botao.addEventListener("click", calculoAmor)
}

function calculoAmor(){
    let seuNome = document.getElementById("seu-nome")
    let nomeCrush = document.getElementById("nome-crush")
    let resultadoMensagem = document.getElementById("resultado-mensagem")
    let resultadoPorcentagemElement = document.getElementById("resultado-porcentagem")
    let resultadoPorcentagem = resultadoPorcentagemElement.value
    

    resultadoMensagem.innerHTML = "" //resetar

    
    
    
    if(seuNome.value.length === 0 || nomeCrush.value.length === 0){
        resultadoMensagem.innerHTML = "Verifique os campos e tente novamente!"
    } else if(seuNome.value === nomeCrush.value){
        resultadoMensagem.innerHTML = "Epa, amigão. Quer namorar contigo mesmo? KKKKKK"
    } else{
        let randomNumber = Math.random()
        resultadoPorcentagem = 100
        resultadoPorcentagemElement.innerHTML = `${resultadoPorcentagem}% de chance de dar certo`

        if(resultadoPorcentagem <= 49){
            resultadoMensagem.innerHTML = 'Tá bem díficil. "Sonhar, nunca desistir 🎹"'
        } else if(resultadoPorcentagem >= 50 && resultadoPorcentagem <= 69){
            resultadoMensagem.innerHTML = "Será que dá? Tem que tentar 🤔"
        } else if(resultadoPorcentagem >= 70 && resultadoPorcentagem <= 99){
            resultadoMensagem.innerHTML = "Chance boa demais, hein. Continua assim e vai administrando 👀"
        } else if(resultadoPorcentagem === 100){
            seuNome.style.border = "solid 1px #d000ff"
            nomeCrush.style.border = "solid 1px #d000ff"
            resultadoMensagem.innerHTML = "Cara, vocês sinceramente nasceram um para o outro ❤️‍🔥"

            
            
        } else{
            return false
            
        }
    }
    
    
    

    }



