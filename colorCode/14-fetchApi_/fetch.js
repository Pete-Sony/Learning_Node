
const url ="https://api.agify.io?name=meelad"
 // This api returns the speculated age of a given person's name.
async function agify(){
    const response = await fetch(url)
    const data = await response.json()
    // This calls the json method on the prototype of the Respose object.
    console.log(data);
}
agify()
/* 
.json()- It is a asynchronous operation.
*/