const {readFile, writeFile} = require('fs')
readFile('../content/First.txt',"utf8",(err,result)=>
{if(err){
    console.log(err)
    return
}
console.log(result)
})
/* You have to add the utf encoding value as the second parameter,
ReadFile uses a callback function which passes in 2 arguments err and result.
*/
