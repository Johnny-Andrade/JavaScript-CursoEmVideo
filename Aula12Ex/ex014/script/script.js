function carregar(){
    var msg = document.querySelector("div#msg")
    var img = document.querySelector('img#imagem')

    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas!`

    if(hora >= 6 && hora <12){
        //Bom dia
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#9FB39A'
        img.style.outlineColor = '#9FB39A'
    } else if(hora >= 12 && hora <18){
        //Boa tarde
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#e7b74e'
        img.style.outlineColor = '#e7b74e'
    } else if(hora >= 18){
        // Boa noite
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#5e65c2'
        img.style.outlineColor = '5e65c2'
    }else{
        //Boa madrugada
        img.src = 'imagens/madrugada.jpg'
        document.body.style.background = '#1b2b68'
        img.style.outlineColor ='#1b2b68'
    }
}

