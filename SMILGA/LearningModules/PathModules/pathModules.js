 const path = require('path')



 console.log(path.sep);// This returns a platform specific seperator.
 //(Value might be different for different platform)

 // What is a seperator property?? 
 // Read furthur into the path modules.
 const filepath = path.join('./content','/subfolder','/test.txt')
 //It joins the names into a filepath
 console.log(filepath)
const baseName = path.basename(filepath)
console.log(baseName)
const absPath  = path.resolve(__dirname,'content','subfolder','test.txt');
// It accepts a set of paths and resolves it into a single absolute path.
// __dirname - This will point to the directory to which is located.
console.log(absPath);