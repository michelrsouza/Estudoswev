const peso1 =1.0
const peso2 = Number("2.0")
console.log(peso1, peso2)
console.log(Number.isInteger(peso2)) // is integere usado pra verificar se o numero é inteiroboolean
const avaliacao1= 9.8714
const avaliacao2= 6.8714

const total = avaliacao1*peso1 + avaliacao2*peso2
const media= total/(peso1+peso2)

console.log(media. toFixed(3)) //to fixed controlar a quantidade de algarismo pos ponto
console.log(media.toString(16)) // retorna o valor em binario no uso do dois dentro dos parenteses
