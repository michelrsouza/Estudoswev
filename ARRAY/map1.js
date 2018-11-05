const nuns=[1,2,3,4,5,6 ]
// função map for com proposito
let resultado =nuns.map(function(e){ //function(e) elemento
return e*2
}) 
console.log(resultado)

const soma10 = e =>e+10
const triplo = e=>3*e
const paraDinheiro = e=>`R$ ${parseFloat(e).toFixed(2).replace('.',',')}`
console.log(nuns.map(soma10))
resultado = nuns.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)