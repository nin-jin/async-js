var user = require( './user' )
var greeter = require( './greeter' )

console.time( 'time' )
greeter.say( 'Hello' , user )
greeter.say( 'Bye' , user )
console.timeEnd( 'time' )
