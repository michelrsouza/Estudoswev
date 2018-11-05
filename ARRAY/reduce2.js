const alunos=[
    {nome:"Jaoao", nota:7.3, bolsista:false},
    {nome:"MAria", nota:9.2, bolsista:true},
    {nome:"Pedro", nota:8.7, bolsista:true},
    {nome:"Ana", nota:9.8, bolsista:true}


]
const todosBolsista= (resultado,bolsista)=> resultado&&bolsista
console.log(alunos.map(a=>a.bolsista).reduce(todosBolsista))
