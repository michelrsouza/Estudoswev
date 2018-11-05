function Pessoa(nome){
    this.nome=nome

this.falaar= function(){
    console.log(`menome é${nome}`)
}
}
const p1= new Pessoa("João")
p1.falaar()