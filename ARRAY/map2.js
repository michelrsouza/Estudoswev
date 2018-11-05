const carrinho= ['{"nome":"Borracha","preco":"3.45"}','{"nome":"caderno","preco":"13.90"}','{"nome":"Kit Lapis","preco":"7.50"}','{"nome":"caneta","preco":"41.22"}'
]
const paraObjeto= json=>JSON.parse(json)
const apenasPreco= produto=>produto.preco
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)