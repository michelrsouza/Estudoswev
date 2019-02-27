//padrão middlewar  chaisn responsabillity

const passo1= (ctx,next)=>{

    ctx.valor1='mid1'
    next()
}

const passo2= (ctx,next)=>{

    ctx.valor2='mid2'
    next()
}

const passo3= (ctx)=>{

    ctx.valor3='mid3'

}

const exact= (ctx, ...Middlewares)=>{
    const execpassos =indice=>{
        Middlewares&&indice < Middlewares.length && Middlewares[indice](ctx,()=>execpassos(indice+1))
    }
    execpassos(0)
}
    
    const ctx={}

    exact(ctx, passo1,passo2, passo3)
    console.log(ctx)
    