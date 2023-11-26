const {readFile} = require('fs')

const getText = (path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,"utf-8",(err,data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    }
    )
}
getText("./0A-First.txt").then(result=>
    console.log(result)).catch(err=>console.log(err))
/* I dont think interchanging result and err in the promise chain would affect the code in any way
*/