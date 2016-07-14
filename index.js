var Future = require( 'fibers/future' )

var user = require( './user' )
var greeter = require( './greeter' )

Future.task( () => {
    greeter.say( 'Hello' , user )
    greeter.say( 'Bye' , user )
} ).detach()