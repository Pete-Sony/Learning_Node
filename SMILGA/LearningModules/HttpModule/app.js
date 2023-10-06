/*Http module is a built in module
Express is an abstraction over the http module
*/
const http = require('http')
const server = http.createServer((req,res)=>{
    console.log(req)
    if(req.url === '/')
    {
        res.end("Welcome to our home page")
    }
    if (req.url ==="/secret")
    {
        res.end(`Well let's talk about yours first`)
    }

    //The request object is console logged only after the browser is refreshed
    //The server is waiting for the request object
    res.write('Welcome to world of Pappa Peter')
    res.end()// This ends the request cycle.
})
// We need to specifically mention what port our server is listening to.
server.listen(3000)
/* Go and search the web for localhost:_TheNumberInputed_
The number in the port is arbitary.This is another method.
Notice on executing the code. We are not exiting, as we need to keep the 
server running at all times.
*/