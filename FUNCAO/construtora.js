function Carro(Velomax = 200, delta = 5){
//atributo privado
let  velocidadeatual=0
// metodo publico
    this.acelerar=function(){
      if(velocidadeatual+delta<=Velomax){
          velocidadeatual+=delta
      }  else{

        velocidadeatual = Velomax
      }
    }
    this.getvelocidadeatual=function(){
return velocidadeatual

    }
}
const  uno=  new Carro
uno.acelerar()
console.log(uno.getvelocidadeatual())

const ferrari= new Carro(350,20)

ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelocidadeatual())

