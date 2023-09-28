console.log("hi!");
const heyAgain = () => {
    console.log("Hi again !");
}
setTimeout(heyAgain,3000)
console.log("bye")
/*
This is an asynchronous program with heyAgain() as a callback function.
 Note here that when calling the function the braces are not used.
inside the setTimeout function.
it's heyAgain, not heyAgain()
*/