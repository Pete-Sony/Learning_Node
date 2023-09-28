const ageCompare = (age) => {
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if(age >=18)
            {
                resolve("accepted")
            }
            else{
                reject("Access denied")
            }
        },3000)
    })
}
module.exports = {ageCompare}
/* 
This is one of the many ways to export a function
Note here that the {resolve,reject} are Promise objects. They should not
be mistaken for creative names for arguments. It should be written verbatim.
*/