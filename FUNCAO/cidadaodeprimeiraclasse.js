//Forma literal 
function fun1(){

}
// armazenar em uma variavel
const fun2 =function(){

}
// armazenar a função em um arrray
const array = [function(a,b){
    return a+b 

},fun1, fun2]

// armazenar em um atributo de objeto
 const obj = {} 
 obj.falar = function(){ return 'Opa'}
 console.log(obj.falar())
 //passa função por parametro
 function run(fun){
     fun() // não é um exemplo viavel 
 }
 run(function(){console.log("milindrandoooo")})
//função pode conter uma outra conter
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
// usando função dentro de função 
soma(1,2)(5)