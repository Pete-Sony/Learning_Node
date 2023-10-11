const http = require('http')
const server = http.createServer((req,res)=>{
    console.log(`request event`)
    res.end(`Hello World`)
})
server.listen(5000, () =>{
    console.log(`Server is listening on port: 5000`)
})
/* When you put in a callback function into server.listen, 
the webpage still runs even if it is refreshed.
Also listen is an Asynchronous function
*/