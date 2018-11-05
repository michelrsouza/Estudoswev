const pessoa={
    nome: "rebeca",
    idade:30,
    peso:13
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

const dest={ a:1}
const a1={b:2}
 const a2={c:3,a:4}
 const obj=Object.assign(dest,a1,a2) // essa função concatena no objeto de destino  e sobrescreve se tiver mudança de valo
 
