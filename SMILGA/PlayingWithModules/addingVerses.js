//Showcasing a peculiar behaviour.
const verse1 = "I am a thousand winds that blow"
const verse2 = "I am the diamond glints on snow"
function addVerse(){
    console.log(`verse: \n ${verse1} \n ${verse2}`)
}
addVerse();
/*
This shows that if we have a function inside the module, 
the code will run(function will execute ), even though we didn't assign it to a variable.
Check the app.js file.
Reason: When the node exports it, It actually wraps the whole code is wrapped in the function.
*/ 