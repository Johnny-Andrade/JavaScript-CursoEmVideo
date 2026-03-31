function contar(){
    let inicio = Number(document.querySelector('input#inicio').value)
    let fim = Number(document.querySelector('input#fim').value)
    let passo = Number(document.querySelector('input#passo').value)
    let msg = document.querySelector('p#res')
    let valid = true

    if(inicio == 0 || fim == 0){
        alert('[ERRO] Preencha os dados e tente novamente')
        valid = false
    } else if(passo == 0 || passo > fim){
        passo = 1
        alert('Passo inválido. Considerando passo 1.')
        valid = true
    }

    if(inicio > fim && passo >0 || inicio < fim && passo <0){
        passo = passo*-1
    }

    if(valid == true){
        msg.innerHTML = `Contando: `

        if(inicio < fim){
            for(var cont = Number(inicio) ; cont <= fim ; cont+= passo){
            msg.innerHTML += `${cont} > `
            }
        } else if (fim < inicio){
            for(var cont = Number(inicio) ; cont >= fim ; cont+= passo){
            msg.innerHTML += `${cont} > `
        }
        }

        msg.innerHTML+='<strong>Fim!</strong>'
    }
}