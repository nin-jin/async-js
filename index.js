var Atom = require( 'jin2' ).Atom

var user = require( './user' )
var greeter = require( './greeter' )

var script = new Atom( () => {
    console.time( 'time' )
    greeter.say( 'Hello' , user )
    greeter.say( 'Bye' , user )
    console.timeEnd( 'time' )

    return null
} )

script.pull()
