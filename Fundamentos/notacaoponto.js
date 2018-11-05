console.log("Notação")
const obj1={}
obj1.nome="Objetin"
console.log(obj1.nome)
function Obj(nome){
    this.nome=nome
    this.exec = function(){
        console.log("IHIIIIIIIIIIIII")
    }
} // recebe o nome e this vai deixar o nome publico
const Obj2 = new Obj ("cadeira")
const Obj3 = new Obj ("mesa")
console.log(Obj2.nome)
console.log(Obj3.nome)

Obj3.exec()