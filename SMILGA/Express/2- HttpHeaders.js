const http = require("http")

const bugsBunny = http.createServer((req,res)=>{
    console.log("user is inside the matrix")
    res.writeHead(200,{"content-type":"text/html"})
    // Try toggling "html" and "text"
    res.write(`<h1>This is an html page</h1>`)
    // This is used to write Headers
    res.end('Hello')
})
bugsBunny.listen(5000)