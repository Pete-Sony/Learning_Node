const http = require('http')
const fs = require('fs')

http.createServer((req,res)=>{
 const fsstream = fs.createReadStream("./big.txt","utf8")
 fsstream.on("open",()=>{
    fsstream.pipe(res)  // Pipe to res??
 }
 )
 fsstream.on("error",(err)=>{
    res.end(err)
 })
}).listen(5000)