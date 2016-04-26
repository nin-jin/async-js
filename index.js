var user = require( './user' )
var greeter = require( './greeter' )

greeter.say( 'Hello' , user )
.then( () => {
    greeter.say( 'Bye' , user )
} )
