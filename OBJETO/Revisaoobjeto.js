//delete.(nome do objeto), deleta o ultimo objetoelemento 
// const produto = new Object
// formar de criar objetos
//usando a notação literal
const obj1={}
console.log(obj1)

// objeto em js
console.log(typeof Object, typeof  new Object)
const objt2= new Object
console.log(objt2)
// funçoes contrutoras
function Produto(nome, preco, desc){
    this.nome=nome // tgis deixa ele visivel fora da função
    this.getPreceoComdesconto=()=>{
        return preco*(1-desc)
    }
}
const p1 = new Produto("cante :", 20000, 0.20 )
const p2 = new Produto("canetao :", 20000, 0.25 )
console.log(p1.getPreceoComdesconto())
console.log(p2.getPreceoComdesconto())
// funçao factory
function Criarfuncionario(nome, salario,faltas){
    return{nome,
    salario,
    getSalario(){
        return((salario/30) *(30-faltas))
    }}
}
const f1 = new Criarfuncionario("jose",1000,4)
 console.log(f1.getSalario())
 //object.creat
 const filha=Object.create(null)
 filha.nome="ana"
 console.log(filha)

 const fromjson = JSON.parse('{"info": "asdasd"}')
 console.log(fromjson.info)