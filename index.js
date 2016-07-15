var co = require( 'co' )

var user = require( './user' )
var greeter = require( './greeter' )

co( function*() {
    console.time( 'time' )
    yield greeter.say( 'Hello' , user )
    yield greeter.say( 'Bye' , user )
    console.timeEnd( 'time')
} ).catch( error => {
    console.log( error )
} )

