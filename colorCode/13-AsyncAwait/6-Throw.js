let json =`{ "poet": "pablo narudo" }`
try {
    let user = JSON.parse(json);
    if(!user.poem){
     throw new SyntaxError(`There is no poet`)
    }
    console.log(user)
} catch(e){
    console.log("JSON Error: " + e.message)
}
/* We are simulating an api call.
SyntaxError is the name of the  error object and it passes the error.
e.message reads the error. While e.name reads the error name.
Read into it furthur.z
*/