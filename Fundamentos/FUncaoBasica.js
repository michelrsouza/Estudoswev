// função sem retorno, apesar de em momento algum deixa explicito que uma função retorna algo
function imprimirSoma(a,b){
    console.log(a+b)


} // escolher bons nomes pra funções
function soma(a,b=0){
    return  a+b 
}
console.log(soma(2,3))
imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(1,2,2,3)