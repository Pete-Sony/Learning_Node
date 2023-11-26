//We will be exploring utils module in the most minimal sense
const {readFile,writeFile} = require('fs')
const utils = require('util')
//This below code converts a callback-based function into a promise-based function.
const readFilePromise = utils.promisify(readFile)
const writeFilePromise = utils.promisify(writeFile)
/*Or you could use
const {readFile,writeFile} = require('fs').promisify
An alternative
Note: ReadFilePromise is reverted back into readfile.
*/
//The main code
const start = async()=>
{
    try{
        // The whole ordeal of making it a promise function is bypassed
        const first = await readFilePromise('./content/0A-First.txt','utf-8')
        const second = await readFilePromise('./content/0B-Second.txt','utf-8')
        await writeFilePromise('./content/0C-Third.txt',
        `This is a Poem:${first}\n${second}`,
// The 'a' stands for append. It means the code will append it .
        {flag:'a'})

    }
    catch(error){
        console.log(error)
    }
}

start()
// This is a simplified mode of async refactor.