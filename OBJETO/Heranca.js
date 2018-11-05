//cadeia de protipo
Object.prototype.attr0="0"
const avo={attr1:"A"}
const pai={__proto__:avo, attr2:"B"}
const filho={__proto__:pai,atrr3:"C"}
console.log(filho.attr1)
console.log(filho.attr0)

const carro={
    velmax:0,
    velocidadeatual:0,
    aceleraMais(delta){
        if(this.velocidadeatual<=this.velmax){
            this.velocidadeatual=this.velocidadeatual+delta
        }else{
            this.velocidadeatual=this.velmax
        }
    },
    status(){
        return`${this.velocidadeatual}KM/h`
    }


}
const ferrari={
    modelo:"f40",
    velmax:320
}
const volvo={
    modelo:"v40",
    status(){
        return` ${this.modelo}:${super.status()}`
    }

}
Object.setPrototypeOf(ferrari, carro)// define quem é o objeto pai 
Object.setPrototypeOf(volvo, carro)
console.log(ferrari)
console.log(ferrari)
console.log(volvo.aceleraMais(100))
console.log(volvo.status())