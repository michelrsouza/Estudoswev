const  prod1 = {} //{} representa um objeto pode ser usado dinamicamente
prod1.nome='celular ultramega' // atributo criado dinamicamente
prod1.preço= 4999.9
 console.log(prod1)
prod1['Descontasso XDSS']= 0.40
console.log(prod1)
const prod2= {nome: 'camisa polo'
,'preço': 4.9}
console.log(prod2)
// transformando em json
// atributos de json é delimitado por aspas  duplas
'{ "nome": "celular ultramega", "preço": 4999.9}' // json é um formato textual de objeto