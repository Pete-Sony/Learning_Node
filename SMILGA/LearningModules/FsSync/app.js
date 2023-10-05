const {readFileSync,writeFileSync }= require('fs')
const first = readFileSync("../content/First.txt","utf8")
const second = readFileSync("../content/Second.txt","utf8")
/* The readFileSync takes in 2 paramaters. The first, The file location,
The second being the encoding, the default will be utf8.
Remember to enclose it in Quotes.
*/
console.log(first,second)
writeFileSync("../content/Third.txt",`This is the result:\n ${first + second}`,{flag:'a'})
/* 
This function writes a file into existence if it did not(exist).
The second argument takes in the content to write. It rewrites again and again.
-- If you want to append the text. You should pass a third argument, basically an 
options object. Otherwise it overrides it.
*/  