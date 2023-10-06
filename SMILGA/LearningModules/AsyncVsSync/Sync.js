const {readFileSync,writeFileSync }= require('fs')
console.log('start')
const first = readFileSync("../content/First.txt","utf8")
const second = readFileSync("../content/Second.txt","utf8")
console.log(first,second)
writeFileSync("../content/Third.txt",`This is the result:\n ${first + second}`,{flag:'a'})
console.log("Done with the task")
console.log("Starting the next one")
/* If reading the two files takes much time , your application is pretty much down.
*/