let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('p#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Número adicionado: ${num.value}`
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
        alert('Valor inválido ou presente na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    valores.sort()
    if(valores.length ==0){
        alert('Adicione valores antes de finalizar.')
    }else{
        let tot = valores.length
        let maior = valores[tot-1]
        let menor = valores[0]
        let soma = 0

        for(let v in valores){
            soma += valores[v]
        }

        let media = soma/tot

        res.innerHTML =`Ao todo, temos ${tot} elementos.`
        res.innerHTML +=`<p>O menor valor é ${menor}</p>`
        res.innerHTML +=`<p>O maior valor é ${maior}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média de todos os valores é ${media}</p>`
    }
}