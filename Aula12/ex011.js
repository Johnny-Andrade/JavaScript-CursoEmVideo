var idade = 61
if(idade < 16 || idade >=65){
    console.log(`Você tem só ${idade} anos, NÃO pode votar!`)
    } 
    else  if(idade<18){
        console.log(`Cê tem ${idade} anos, pode votar opcionalmente...`)
        } 
        else if(idade<65){
            console.log(`Você tem ${idade} anos, DEVE votar.`)
        }