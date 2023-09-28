//Different Methods of importing modules.
const { Khalil, Kipling } = require("./data");
//Method 1
const poetry = require('./data')
//Method 2
const recite = require('./PoetryLines');
//Importing a function
const data = require('./AlternativeSyntax')
//The above line imports from a file with 2 exports.
console.log(data)
//Just logging it in.
recite(Khalil)
recite(Kipling)
//The above is a method of importing modules.
recite(poetry.Khalil)
recite(poetry.Kipling)
//This is another.

require('./addingVerses')
// When you import a module you actually invoke it.