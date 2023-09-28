const {ageCompare} = require('./ageComparison')
const  readline = require('readline')// Importing the readline in-built module of node.
const handleSuccess =(resolvedValue)=>{
    console.log(resolvedValue);
}
const handleFailure = (rejectedValue)=>{
    console.log(rejectedValue);
}
//Declaring onSuccess and onFailure functions.

let rl = readline.createInterface(process.stdin,process.stdout) // Declaration for creating an Interface.
rl.question("What is your age? ",(yourAge)=>{
    ageCompare(yourAge).then(handleSuccess,handleFailure)// Chaining Promises.
    rl.close(); // Closing the Interface.
})
/*
When importing a function don't forget to enclose the function in curly braces.
{function} and add a const variable declaration.
Taking imputs in terminal without using npm packages.
*/