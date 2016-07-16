var user = require( './user' )
var greeter = require( './greeter' )

try {

    console.time( 'time' )
    greeter.say( 'Hello' , user )
    greeter.say( 'Bye' , user )
    console.timeEnd( 'time' )
    greeter.say( 'Oops' , null )

} catch( error ) {
    console.error( error )
}