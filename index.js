var Future = require( 'fibers/future' )

var user = require( './user' )
var greeter = require( './greeter' )

Future.task( () => {
    console.time( 'time' )
    greeter.say( 'Hello' , user )
    greeter.say( 'Bye' , user )
    console.timeEnd( 'time' )
} ).detach()