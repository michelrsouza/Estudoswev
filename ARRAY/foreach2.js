const aprovados=["agatha","aldo", "daniel","raquel"]
Array. prototype.forEach2= function(callback){
for(let i=0;i< aprovados.length;i++){
    callback(this[i],i,this)
}
}