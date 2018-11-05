const sequencia={
    _valor: 1, // convenção deveria ser privada
    get valor(){return this._valor++},
    set valor (valor){ 
        if(valor> this.valor){
        this._valor=valor
        }
    }
    
}
// acessando via get set
console.log(sequencia.valor,sequencia.valor, sequencia.valor)