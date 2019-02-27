const sequence ={
_id:1,
get id(){return(this._id++)}

}
const produtos ={}

function salvarproduto(produtos) {
    if(!produto.id)produto.produto=sequence.id
    produtos[produtos.id]=produto
    return produto
}

function getProduto(id){
return produtos[id]||{}

}
function getProdutos(){
    return Object.values(produtos)
}
module.exports ={ salvarproduto,getProduto,getProdutos} //deixando visivel as funções pra fora