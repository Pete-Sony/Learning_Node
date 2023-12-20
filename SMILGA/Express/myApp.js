const http = require("http")

const bugsBunny = http.createServer((req,res)=>{
    console.log("user is inside the matrix")
})
bugsBunny.listen(5000)