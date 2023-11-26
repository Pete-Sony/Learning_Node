const http = require(`http`)
const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        console.log(`Hi`)
        res.end(`Home Page`)
    }
    if(req.url ===`/about`){
   // Blocking Code
        for(let i = 0; i<= 1000;i++){
            for(let j = 0; j<= 1000; j++){
                console.log(`${i}${j}`)
           
            }}
            console.log("about")
            res.end(`About Page  `)
   
        }         
    //      res.end(`Error Page `)
      }
     
)

server.listen(5000,()=>{
    console.log(`Server Listening on port 5000....`)
})


/* I haven't quite grasped what happens when you put in the 
.log and res.end(`About page  `) inside the loop. 
Haven't figured out why it has crashed
*/
/* When you add in the blocking Code , Not only does the request url with 
the blocking code gets blocked, but also any other user who navigates through 
any other endpoint
Not only does the users navigating through the blocking code gets blocked 
but other users who acceses the endpoints.
*/