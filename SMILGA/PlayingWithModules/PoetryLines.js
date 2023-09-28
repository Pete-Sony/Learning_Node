const recite =(verses)=>{
    let count = 1;
    console.log(`verse${count++}: ${verses} `)
}
module.exports = recite
/* exporting it as default, when you have a single value.
Notice the function doesn't have any parenthesis. Therefore it isn't called.
*/