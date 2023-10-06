/* This is a classic example of callback Hell.
We also explore FsAsync Module.*/
const {readFile,writeFile } = require('fs')
readFile("../content/First.txt","utf-8",(err,result)=>{
    if(err)
{
    console.log(err)
    return
}
const first = result
readFile("../content/Second.txt","utf-8",(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const second = result;
writeFile("../content/ThirdAsync.txt",`Here is the result : \n ${first + second}`,{flag:'a'},(err, result)=>
{
    if(err){
        console.log(err)
        return
    }
    console.log(result)

})
})
})