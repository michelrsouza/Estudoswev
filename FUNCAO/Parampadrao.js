// estrategias 
function soma1(a,b,c){
a=a||1  // caso a for falso retorna o valor 1 
b=b||1 // caso e for falso retorna o valor 1
c=c||1 // caso c for falso retorna o valor 1
return a+b+c
}
console.log(soma1(0,0,0))
function soma2(a,b,c){
a=a !==undefined ? a:1
b= 1 in arguments ? b:1   // se existe nos argumento o indice de valor um
c= isNaN ?1 :c 
}
//usando padrão do ec2015
function soma3(a=1,b=1,c=1){// metodo mais atualizado

return a+b+c

}