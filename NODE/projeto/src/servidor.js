const porta = 3003
const express = require('express')
const app = express()
const bancodedadso=require('./bancodedados')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.get('/produtos',(req,res,next)=>{

    res.send(bancodedadso.getProdutos())
})
app.listen(porta,()=>{
console.log(`Servidor está executandoah na porta ${porta}`)

})
app.get('/produtos/:id',(req,res,next)=>{

    res.send(bancodedadso.getProdutos(req.params.id))
})
app.post('/produtos',(req,res,next)=>{
    const produto = bancodedadso.salvarproduto(
       { nome:req.body.name,
            preco:req.body.preco
           }    )
           res.send(produto)
        }
)
app.post('/produtos',(req,res,next)=>{
    const produto = bancodedadso.salvarproduto(
       { nome:req.body.name,
            preco:req.body.preco,
            id: req.params.id
           }    )
           res.send(produto)
        }
)

