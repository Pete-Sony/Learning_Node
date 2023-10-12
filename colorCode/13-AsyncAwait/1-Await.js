function getData() {
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve("Hello"),1000
        })
    })
}
const result = getData()
console.log(result);
/* 
Remember the capital P in Promise().
Also this is when i realized that strings can be passed as arguments in 
resolve().
*/
/* The result will log as pending because the promise will not be fulfilled
when the result is logged.
*/