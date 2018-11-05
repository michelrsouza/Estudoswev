const nome = "rebeca"
const concatenacao= "Ol[a]" +nome+"!!"
const template= `
 olá
 ${nome}!` // usando crase  para suportar quebra de linha em concatenação
 console.log(concatenacao, template)
console.log(`1+1 = ${1+1}`)
const up = texto => texto.toUpperCase() 
console.log(`eii${up('cuidado')}!`)