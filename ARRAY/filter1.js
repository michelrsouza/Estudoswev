const produtos=[ {nome:"notebook",preco:2500, fragil:true  },
{nome:"pad pro", preco : 1500,fragil:true},
{ nome:"copo de vidro", preco:15.60, fragil: true},
{nome:"copo de plastico", preco:18.90, fragil:false}
]
console.log(produtos.filter(function(p){
    return p.preco> 1000// false não tem nada, true return todo array
}))
const CEF = function(p){

    return console.log( p.filter(function(p){
        return p.preco<500 && p.fragil==true
    }))
}
console.log(CEF(produtos))

const caro= produtos=> produtos.preco>500
const ffragil= produtos=>produtos.fragil 

console.log(produtos.filter(caro).filter(ffragil))
