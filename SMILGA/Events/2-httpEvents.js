const http = require('http')
const server = http.createServer()

// Instead of passing in a callback function server has a method on{Event Method}
server.on('request', (req,res)=>{
res.end('Welcome')
})
server.listen(5000)
// Class http extends server which in turn extends net.server which in turn extends the
//Event Emiiter