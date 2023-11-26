console.log(`First`)
setTimeout(()=>{
    console.log(`second`)
},0)
console.log(`third`)
/*
This is an Event Loop example
This setTimeout being an asynchronous function causes the second task to come later
Than the first.
Even if the setTimeout is set to 0, the function has a lag.
*/