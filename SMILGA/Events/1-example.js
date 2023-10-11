const {readFile } = require('fs')

console.log('Started the first Task')
readFile("./0A-First.txt","utf-8",(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log(`Completed Final Task`)
    })
    console.log(`Starting Next Task`)
