function example() {
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve(`Well this is resolved`)
            // reject(`Well this is rejected`)
        },1)
    })
}
 
async function start(){
    try{
    const result = await example()
}catch(errror){
console.log(`ERROR:${error}`)
}}

///////complete this later (revise the try catch concepts)