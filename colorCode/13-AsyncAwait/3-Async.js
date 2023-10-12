function getData() {
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve("This is a string"),1000
        })
    })
}
async function solved(){
const result = await getData()
console.log(result);
}
solved()

/* This is how you properly execute an asynchronous function
*/