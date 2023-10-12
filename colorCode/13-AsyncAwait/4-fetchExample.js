/*I am not able to convert the returned data from html into JSON object.
This is simply because I don't know how.
------------------------------REFACTOR THIS CODE ----------------------------
*/
async  function RandomData(){
    const data = await fetch("https://random-data-api.com/api/v2/users")
    const result = await data
    
    
    console.log(result)
}
// Both of these code(above and below) have a similar function, but the code below is a mess.
// The below example is .then chaining while the above code is written in a synchronous manner.
async function anotherExample(){
    fetch("https://random-data-api.com/api/v2/users")
    .then(data => data.json())
        .then( result => console.log(result))
    
}
RandomData()
anotherExample()