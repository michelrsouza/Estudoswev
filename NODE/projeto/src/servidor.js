const porta = 3003
const express = require('express')
const app = express()
const bancodedadso=require('./bancodedados')
app.get('/produtos',(req,res,next)=>{

    res.send(bancodedadso.getProdutos())
})
app.get('/produtos/:id',(req,res,next)=>{

    res.send(bancodedadso.getProduto(req.params.id))
})
app.post('/produtos',(req,res,next)=>{
    const produto = bancodedadso.salvarproduto(
       { nome:req.body.name,
            preco:req.body.preco
           }    )
           res.send(produto)
        }
)

app.listen(porta,()=>{
console.log(`Servidor lalaal${porta}`)

})