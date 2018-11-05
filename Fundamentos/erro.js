function TratarErroLancar(erro){
    throw new Error('paçoca') // onde manda a msg 
}

function imprimirnomegritado(obj){
    
    try{//colocar onde  tem uma chance de dar algum erro
    console.log(obj.name.toUpperCase()+'!!!')
    }catch(e){//se gerar algum erro no try(qualquer parte)
        TratarErroLancar(e)

    }finally{
        console.log("final")
    }//é eexecutado mesmo que ocorrer erro
}
const obj= {nome: 'Roberto'}
imprimirnomegritado(obj)