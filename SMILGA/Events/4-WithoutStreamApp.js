const http = require("http")
const fs = require('fs')

http.createServer((req,res)=>
{
    const read = fs.readFileSync("./big.txt",'utf8')
    res.end(read)

}).listen(5000)