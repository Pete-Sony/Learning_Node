function getData() {
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve("Hello"),1000
        })
    })
}
const result = await getData()
console.log(result);
// This code will not work as the result is not encapsulated in an async code.
