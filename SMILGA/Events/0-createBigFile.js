const { writeFileSync } = require('fs')

for(let i =1; i<100000;i++)
{
    writeFileSync('./big.txt',`hello world ${i}\n`,{flag:'a'})
}