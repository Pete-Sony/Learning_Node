const EventEmitter = require('events')
const customEmitter = new EventEmitter()
/* This object exposes the "on" and "emit" methods

emit  - is used to trigger an event
on   -is used to add a callback function that's going to be executed when 
the event is triggered
The order matters, you first listen to the event then you emit it.
*/

// This is an event handling function 
customEmitter.on(`Scream`,() =>{
    console.log(`Good Heavens`)
})
// In the above code we assigned a event to an event handling function.
customEmitter.on('Scream',(ent,obj) =>{
    console.log(`Good Heavens!!
There is a ${ent} under my ${obj}`)
})
// You can call multiple methods that respond to the same event. Also you can
// pass multiple arguments.
customEmitter.emit(`Scream`, 'elephant',' desk')
// Here we are firing  a scream event