const url='http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios= require('axios')



 
// chinesa menor salario
 const chineses =f=>f.pais==='China'
 const mulheres =f=>f.genero==='F' // recebe um funcionario  e retorna se caso ele fordo genero escolhido

 const menorsal= (func, funcatual)=>{
    return func.salario < funcatual.salario ? func : funcatual

 }

 axios.get(url).then(response=>{
    const funcionarios= response.data
    //console.log(funcionarios)

 const func = funcionarios
 .filter(chineses)
 .filter(mulheres)
 .reduce(menorsal)
console.log(func)
}) 