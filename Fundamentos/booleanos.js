let isAtivo =false
console.log(isAtivo)
isAtivo=1
console.log(!isAtivo)
console.log(!!3)
console.log(!!1)
console.log(!!" ")
console.log(!![])//Array
console.log(!!{})//objeto literal
console.log(!!(isAtivo=Infinity))


console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo=false))

console.log('pra finalizar')
console.log(''||null||0||'epa' )
let nome ='hahah'
console.log(nome||'Desconhecido')//pegar um valor padrão de uma variavel, vendo se tem algo digitado