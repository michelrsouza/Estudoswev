

function falarDepoisde(segundos, frase){
    return new Promise((resolve,reject) =>{ //resolve chama quando a promise  é resolvida
        setTimeout(()=>{
            reject(frase)
        }, segundos*1000)
        
    })

}
falarDepoisde(5, 'Que legal')
.then(frase=> frase.concat('??!?') )
.then(Outrafrase=>{console.log(Outrafrase)})
.catch(e=> console.log(e))
// pra tratr erro na promise CAtch