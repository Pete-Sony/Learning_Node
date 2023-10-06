const os = require('os')
// For built in modules you simply put in the module name in the argument passed down in require function. Different from the file approach (",/filename")
const userInfo = os.userInfo()
// Logs out userinfo
console.log(userInfo)
//logs out the system uptime in minutes.
console.log(`The System Uptime is ${Math.floor(os.uptime()/60)} minutes and ${Math.floor(os.uptime%60)} seconds`);
const myOs ={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem()/(1024*1024),
    freeMem : os.freemem()/(1024*1024)
}
console.log(myOs)