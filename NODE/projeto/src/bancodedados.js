const sequence ={
_id:1,
get id(){return(this._id++)}

}
const produtos ={}

function salvarproduto(produto) {
    if(!produto.id)produto.produto=sequence.id
    produto[produto.id]=produto
    return produto
}

function getProduto(id){
return produtos[id]||{} // retorn o produto pel ID ou um objeto vazio se caso não acha o produto

}
function getProdutos(){
    return Object.values(produtos)
}
module.exports ={ salvarproduto,getProduto,getProdutos} //deixando visivel as funções pra fora