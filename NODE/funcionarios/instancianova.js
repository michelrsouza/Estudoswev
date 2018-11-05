// uma factory retorna uma nova instancia
module.exports =()=>{
    valor:1
    return{
        inc(){
            this.valor++
        }
    }
}