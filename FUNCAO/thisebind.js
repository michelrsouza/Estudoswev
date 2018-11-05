const pessoa= {
    saudacao: "hahahaha",falar(){
            console.log(this.saudacao)
    }

}
pessoa.falar()
 const falar = pessoa.falar
 falar()
  const Falardepessoa = pessoa.falar.bind(pessoa) // passando pessoa para o bind ele resolve o problema de identificação a quem o this se refere
   Falardepessoa()  