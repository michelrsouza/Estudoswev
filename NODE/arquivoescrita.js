const fs = require('fs')

 const produto={

    nome:'celular',
    preco:120,
    desconto:2.5
 }
 fs.writeFile(__dirname+'/arquivoGerado.json',JSON.stringify(produto),err=>{
     console.log(err||'arquivo salvo')
 })

 console.log()