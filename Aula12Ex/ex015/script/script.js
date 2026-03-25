function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.querySelector('input#anoNas')
    var res = document.querySelector('div#res')

    if(fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fAno.value
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        var genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=125){
                //Esqueleto
                img.setAttribute('src', 'imagens/esqueleto.jpg')
            }else if(idade >= 0 && idade <= 10){
                //Criança
                img.setAttribute('src', 'imagens/crianca-homem.jpg')
            } else if(idade <18){
                //Adolescente
                img.setAttribute('src', 'imagens/adolescente-homem.jpg')
            } else if(idade < 60){
                //Adulto
                img.setAttribute('src', 'imagens/adulto-homem.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso-homem.jpg')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=125){
                //Esqueleto
                img.setAttribute('src', 'imagens/esqueleto.jpg')
            }else if(idade >= 0 && idade <= 10){
                //Criança
                img.setAttribute('src', 'imagens/crianca-mulher.jpg')
            } else if(idade <18){
                //Adolescente
                img.setAttribute('src', 'imagens/adolescente-mulher.jpg')
            } else if(idade < 60){
                //Adulta
                img.setAttribute('src', 'imagens/adulto-mulher.jpg')
            } else {
                //Idosa
                img.setAttribute('src', 'imagens/idoso-mulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos! <br>`
        res.appendChild(img)
    }
}