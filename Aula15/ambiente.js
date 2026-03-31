let num = [5, 8, 2, 9, 3]

console.log(`Nosso vetor é ${num} e tem ${num.length} posições`)

//num[5] = 7  // Esse funciona, mas para colocar na última posição, temos:
num.push(7)
console.log(`Nosso novo valor é ${num} e tem ${num.length} posições`)

num.sort()
console.log(`Em ordem crescente, nosso vetor é ${num}`)

let pos = num.indexOf(6)
if(pos == -1){
    console.log('O valor não foi encontrado.')
} else{
    console.log(`O valor está na posição ${pos}`)
}