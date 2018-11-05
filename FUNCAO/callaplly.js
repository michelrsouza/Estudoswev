function getPreco(imposto=0,Moeda='R$'){
    return `${Moeda} ${this.preco*(1-this.desc)*(1+imposto)}`


}
const produto={

    nome:"produto",
    preco:4589,
    desc:0.15,
    getPreco
}
//console.log(getPreco())
console.log(produto.getPreco())
const carro = { preco:499990,desc:0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
// diferença entra call e aplly  é forma como são passados os aprametro
console.log(getPreco.call(carro,0.20,'$'))
console.log(getPreco.apply(carro,[0.20,'$']))