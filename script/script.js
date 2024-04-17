

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
    let resultadoMensagem = document.getElementById("resultado-mensagem")
    let resultadoPorcentagemElement = document.getElementById("resultado-porcentagem")
    let resultadoPorcentagem = resultadoPorcentagemElement.value
    

    resultadoMensagem.innerHTML = "" //resetar
    
    
    if(seuNome.length === 0 || nomeCrush.length === 0){
        resultadoMensagem.innerHTML = "Verifique os campos e tente novamente!"
    } else if(seuNome === nomeCrush){
        resultadoMensagem.innerHTML = "Epa, amigão. Quer namorar contigo mesmo? KKKKKK"
    } else{
        let randomNumber = Math.random()
        resultadoPorcentagem = Math.floor(randomNumber * 100) + 1
        resultadoPorcentagemElement.innerHTML = `${resultadoPorcentagem}% de chance de dar certo`

        if(resultadoPorcentagem <= 49){
            resultadoMensagem.innerHTML = 'Tá bem díficil. "Sonhar, nunca desistir 🎹"'
        } else if(resultadoPorcentagem >= 50 && resultadoPorcentagem <= 69){
            resultadoMensagem.innerHTML = "Será que dá? Tem que tentar 🤔"
        } else if(resultadoPorcentagem >= 70 && resultadoPorcentagem <= 99){
            resultadoMensagem.innerHTML = "Chance boa demais, hein. Continua assim e vai administrando 👀"
        } else if(resultadoPorcentagem === 100){
            document.getElementById("seu-nome").style.borderColor = "#d000ff"
            document.getElementById("nome-crush").style.borderColor = "#d000ff"
            resultadoMensagem.innerHTML = "Cara, vocês sinceramente nasceram um para o outro ❤️‍🔥"

            
            
        } else{
            return false
            
        }
    }
    
    
    

    }



