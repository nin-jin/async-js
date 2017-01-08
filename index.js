var Atom = require( 'mol_atom' ).$mol_atom

var user = require( './user' )
var greeter = require( './greeter' )

var measuring = false
var script = new Atom( 'script' , () => {
    if( !measuring ) console.time( 'time' ) , measuring = true
    greeter.say( 'Hello' , user )
    greeter.say( 'Bye' , user )
    console.timeEnd( 'time' )

    return null
} )

script.get()
