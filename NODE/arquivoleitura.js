const fs = require('fs')
//sincorno

const caminho =  __dirname + '/arquivo.json'

const conteudo = fs.readFileSync(caminho,'utf-8')
console.log(conteudo)
//assicroan
 fs.readFile(caminho,'utf-8',(err,conteudo)=>{
 const config =JSON.parse(conteudo)
 console.log(`${config.db.host}:${config.db.port}`)
})

const config  =  require('./arquivo.json')

console.log(config.db)

fs.readdir(__dirname,(err, arquivo)=>{
    console.log("conteudo")
    console.log(arquivo)

})