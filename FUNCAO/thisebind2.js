function Pessoa(){
    this.idade = 0
    setInterval(function(){       
        this.idade++
    console.log(this.idade) 
    }.bind(this),1000) // a cada 1000 milisegundo que passar a function anonima será disparada

}
new  Pessoa
function Pessoa2(){
    this.idade2 = 0
    const self = this
    setInterval(function(){       
        self.idade2++
    console.log(self.idade2) 
    },1000)

}
new  Pessoa2