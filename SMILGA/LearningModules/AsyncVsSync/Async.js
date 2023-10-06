/* You must understand callbacks and Async v/s Await concepts as a prereqquisite for async-await and promisses.
*/ 
const {readFile,writeFile } = require('fs')
console.log('start')
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
    console.log('done with this task')

})
})
})
console.log(`starting the next task`)