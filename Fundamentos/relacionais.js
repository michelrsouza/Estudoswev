console.log("01)",'1'==1)
console.log("02)",'1'===1)// estritamente iguais
console.log("03)",'1'!=1)
console.log("04)",'1'!==1)//estritamente diferente
const d1 = new Date(0)
const d2 = new Date(0)

console.log(d1===d2)
console.log(d2==d1)

console.log(d2.getTime()===d1.getTime())
console.log(d2.getTime())