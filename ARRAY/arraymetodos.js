const pilotos= ["vettel","alonso", "Raikkonen","massa"]
pilotos.pop() // massa quebrou o carro REMOVE O ULTIMO ELEMENTO DO ARRAY
 console.log(pilotos)
 pilotos.push('Vestaten')
 console.log(pilotos)
 pilotos.shift()// remove o primeiro elemento4
 console.log(pilotos)
 pilotos.unshift("hamilton")
 console.log(pilotos)

 //splice add
 pilotos.splice(2,0,"bottas","massa ")
 console.log(pilotos)

// slice retorna um novo array
const algunspilotos= pilotos.slice(2) 
console.log(algunspilotos)