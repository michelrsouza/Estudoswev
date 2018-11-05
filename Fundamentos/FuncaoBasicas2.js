//armazenando uam função  em uam variavel
const imprimirSoma = function(a,b){ 
    console.log(a+b)
}// função anonima
imprimirSoma(2,3)
// função Arrow
//transformando em uma função arrow
const soma = (a,b)=>{ //arrow FLECHA
    return a+b
 }

 const subtra =(a,b)=> a-b // arrow comretorno implicito
console.log(subtra(2,3))