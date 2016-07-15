var user = require( './user' )
var greeter = require( './greeter' )

console.time( 'time' )
greeter.say( 'Hello' , user )
.then( () => {
    greeter.say( 'Bye' , user )
    .then( () => {
        console.timeEnd( 'time' )
    } )
} )
