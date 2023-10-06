const http = require('http')

const server = http.createServer((req,res)=>{

    if(req.url === "/about")
        {
            res.write(`<h1>Welcome to our home Page</h1>
            <a href ="/hideout">Click Here</a> `)
        }
    if(req.url === "/hideout"){
        res.write(`<h1>In Here</h1>
        <a href ="/hide">Click Here</a>`)
    }if(req.url === "/hide"){
        res.write(`<h1>Shussssh</h1>
        <p2>Hide in here with me</p2>
        <a href ="/about">Click Here</a>`)
    }
       
        // res.write(`
        //     <h1>This is supposed to be a heading</h1>
        //     <p1>I seem to have lost the my bearings around css </p1>
        //     <a href ="/hideout">Click Here</a> 
        // `);
    }
)
server.listen(3000)
/*
It seems like this code only jumps from one page to another if the page 
routing is lost.
Otherwise it only renders one path and shows an error while it jumps to the next.
2 if the routing is lost .
---------This problem(above) only persists when we write res.end().-------
It can be easily resolved by using res.write().
*/
