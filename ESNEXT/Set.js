//não aceita receita repetição e não tem um indice
const times = new Set()
times.add( 'vasco').add('corinthinas').add('são paulo')
times.add('Flamengo')
console.log(times.has('vasco'))
