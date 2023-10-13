try{
    console.log(`We've entered the try block`)
    ErrorCode()
    console.log(`This code is not reached due to error`)
} catch (err){
    console.log(`The ERROR is caught: ${err.stack}`)
} finally{
    console.log(`Code in this finally block gets executed anyway`)
}
console.log(`Execution of the code continues`)

/*
 err.stack property is a string describing the point in
 which the ERROR was instantized.
 You can console log error object.
*/ 