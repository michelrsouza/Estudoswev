const notas=[1.1,2,2,6.5,7.7,8.8]
//sem o uso do callback
let notabaixas= []
for(let i in notas){
    if(notas[i]<7){
        notabaixas.push(notas[i])
    }
}
console.log(notabaixas)

//com callback
notabaixas2= notas.filter(function(nota){
    return nota<7}) // só retorna true se for <7 

console.log(notabaixas2)
//com arrow
 notasbaixas3 = notas.filter(nota => nota<7)

 console.log(notasbaixas3)