const ferrari={
    modelo: "f40",
    velmax: 250
}
const volvo={
    modelo:" v40",
    velmax:120
}
console.log(ferrari.__proto__) // procura nos objeto pai e se nãoa cha ele retorna undefined
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)
function  Meuobjeto(){

}
console.log(typeof Object, typeof Meuobjeto)
console.log(Object.prototype,Meuobjeto.prototype)