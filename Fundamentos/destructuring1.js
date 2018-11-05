//introduzido no Es 2015
const pessoa = {
nome :'ana',
idade : 5,
endereco :{
    logradouro : "rua abc",
    numero : 1000
    }
}
const {nome, idade}= pessoa// operador destructuring, tirando do objeto pessoa os atributos nome e idade
console.log(nome, idade)
const {nome :n, idade:i} =pessoa// .... e trocando o nome das variaveis
console.log(n,i)
const {sobrenome, bemHumorada=true}= pessoa // caso não tiver em pessoa  retorna o numero atribuido
const {endereco:{logradouro,numero,cep}}=pessoa
console.log(logradouro, numero, cep)