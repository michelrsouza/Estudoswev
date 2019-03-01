const schedule =  require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 10 * * 6', function(){
    console.log('executando tarefa 1', new Date().getSeconds())
}) //5em 5 mins 
