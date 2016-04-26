var Fiber = require( 'fibers' )
var user = require( './user' )
var greeter = require( './greeter' )

Fiber( () => {
    greeter.say( 'Hello' , user )
    greeter.say( 'Bye' , user )
} ).run()