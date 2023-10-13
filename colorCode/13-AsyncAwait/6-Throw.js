let json =`{ "poet": "pablo narudo" }`
try {
    let user = JSON.parse(json);
    // if(user.poet){
    //     throw new PoemError(`There is no poet`)

  
    // }
    console.log(user)
} catch(e){
    console.log("JSON Error: " + e.message)
}