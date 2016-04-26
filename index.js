var user = require( './user' )
var greeter = require( './greeter' )

var script = done => {
    greeter.say( 'Hello' , user , error => {
        if( error ) return done( error )

        greeter.say( 'Bye' , user , done )
    } )
}

script( error => {
    if( error ) {
        console.error( error )
        process.exit( 1 )
    }
} )
