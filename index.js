var user = require( './user' )
var greeter = require( './greeter' )

Promise.resolve()
.then( () => {
    console.time( 'time' )
    return greeter.say( 'Hello' , user )
} )
.then( () => {
    return greeter.say( 'Bye' , user )
} )
.then( () => {
    console.timeEnd( 'time' )
} )
.then( () => {
    return greeter.say( 'Oops' , null )
} )
.catch( error => {
    console.error( error )
} )
