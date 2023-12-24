const http = require("http")

const bugsBunny = http.createServer((req,res)=>{
    console.log("user is inside the matrix")
    res.end('Hello')
})
bugsBunny.listen(5000)