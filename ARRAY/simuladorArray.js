const quaseArray ={0: "rafael",1:"Ana",2:"Bia"}
console.log(quaseArray)
Object.defineProperty(quaseArray ,'toString',{
    value: function(){return Object.valeus(this)    }, enumerable:false
})
console.log(quaseArray)