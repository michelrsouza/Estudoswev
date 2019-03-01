const porta = 3003
const express = require('express')
const app = express()
const bancodedadso=require('./bancodedados')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.get('/produtos',(req,res,next)=>{

    res.send(bancodedados.getProdutos())
})
app.listen(porta,()=>{
console.log(`Servidor está executando na porta ${porta}`)

})
app.get('/produtos/:id',(req,res,next)=>{

    res.send(bancodedados.getProduto(req.params.id))
})
app.post('/produtos',(req,res,next)=>{
    const produto = bancodedados.salvarproduto(
       { nome:req.body.name,
            preco:req.body.preco
           }    )
           res.send(produto)
        }
)

app.listen(porta,()=>{
console.log(`Servidor lalaal${porta}`)

})