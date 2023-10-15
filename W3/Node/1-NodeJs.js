/* response.writeHead is an inbuilt property of the http module.
It sends a response header to the request.
Response Header hold additional information(server, location, propietary information).
it doesnt relate to the content of the message.
*/
const http = require(`http`)

http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type" :'text/plain'})
    // The Content-Type is representation header
    res.end('This is the W3 school content ')
}).listen(8000)