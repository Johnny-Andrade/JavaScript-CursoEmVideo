// Modo não eficiente

/*
console.log('Tudo Bem?')
console.log('Tudo Bem?')
console.log('Tudo Bem?')
console.log('Tudo Bem?')
console.log('Tudo Bem?')
console.log('Tudo Bem?')
*/

// Modo eficiente

var contar = 1
var quant = 6
while(contar <= quant){
    console.log(`Tudo Bem? N°${contar}`)
    contar++
}

// Modo eficiente inverso (Primeiro faz o código, e depois verifica)
contar = 1
do{
    console.log(`To sim! N°${contar}`)
    contar++
} while(contar <= quant)
