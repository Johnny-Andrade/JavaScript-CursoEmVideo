function contar(){
    let ini= document.querySelector('input#inicio')
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')
    let res = document.querySelector('p#res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.lenght == 0){
        res.innerHTML = 'Impossível contar. Preencha os dados novamente.'
    } else{
        res.innerHTML = 'Contando: <br>'
        let iniN = Number(ini.value)
        let fimN = Number(fim.value)
        let passoN = Number(passo.value)
        
        if(passoN <= 0){
            passoN = 1
            alert('Passo inválido. Considerando passo 1.')
        }

        if(iniN < fimN){
            for(let c = iniN; c <= fimN; c += passoN){ //Contagem Crescente
            res.innerHTML += `${c} \u{1F449}`
            }
        } else{
            for(let c = iniN; c >= fimN; c -= passoN){ //Contagem Regressiva
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `Fim! \u{1F3C1}`
    }

}