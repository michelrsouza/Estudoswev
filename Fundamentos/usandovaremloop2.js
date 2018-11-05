var func=[]
for (var i =0;i<10;i++){
func.push(function(){
console.log(i)
})
}
func[2]()
func[8]() // imprimi 10 para todas as posições, por função não dar liberdade dentro de função
