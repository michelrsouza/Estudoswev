const alunos=[
    {nome:"Jaoao", nota:7.3, bolsista:false},
    {nome:"MAria", nota:9.2, bolsista:true},
    {nome:"Pedro", nota:8.7, bolsista:false},
    {nome:"Ana", nota:9.8, bolsista:true}



]
const  resultado=alunos.map(a=>a.nota).reduce(function(acumulador,atual){

    console.log(acumulador, atual)
    return acumulador+ atual
})
console.log(resultado)