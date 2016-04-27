var Atom = require( 'jin2' ).Atom

var user = require( './user' )
var greeter = require( './greeter' )

var script = new Atom( () => {
    greeter.say( 'Hello' , user )
    greeter.say( 'Bye' , user )

    return null
} )

script.pull()
