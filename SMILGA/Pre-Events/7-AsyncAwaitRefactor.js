const {readFile} = require('fs')
const getText = (path) =>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf-8',(err,data)=>
        {if(err){
            reject(err)
        
        }else{
            resolve(data)
        }})
    })
}
const start = async()=>{
    try{
        const first = await getText("./content/0A-First.txt")
        const second = await getText("./content/0B-Second.txt")
        console.log(first, second)
    }
    catch (error){
        console.log(error)

    }
}
start()
/* This code is same as the previous code except the previous code has a then promise chaining.
This is more cleaner and more readable approach
*/