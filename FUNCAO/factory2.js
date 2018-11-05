function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto:0.1
    }
}
console.log(criarProduto("Notebook", 50))
console.log(criarProduto("Note", 50))
console.log(criarProduto("book", 50))
