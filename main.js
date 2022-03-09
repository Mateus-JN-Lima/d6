var img = document.getElementById('imagem')
var numero = document.getElementById('numero')

function rolar(){
    
    //parseInt(Math.random() * 7)
    var sorte = parseInt(Math.random() * 7)
    var resultado = sorte

    if (resultado == 1){
        img.src = 'imagens/d1.png'
        numero.innerHTML = "Seu resultado é " + resultado
    }else if (resultado == 2){
        img.src = 'imagens/d2.png'
        numero.innerHTML = "Seu resultado é " + resultado
    }else if (resultado == 3){
        img.src = 'imagens/d3.png'
        numero.innerHTML = "Seu resultado é " + resultado
    }else if (resultado == 4){
        img.src = 'imagens/d4.png'
        numero.innerHTML = "Seu resultado é " + resultado
    }else if (resultado == 5){
        img.src = 'imagens/d5.png'
        numero.innerHTML = "Seu resultado é " + resultado
    }else if (resultado == 6){
        img.src = 'imagens/d6.png'
        numero.innerHTML = "Seu resultado é " + resultado + " UM CRÍTICO"
    }else if (resultado == 0){
        parseInt(Math.random() * 7)
    }
}