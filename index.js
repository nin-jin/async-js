var user = require( './user' )
var greeter = require( './greeter' )

var script = done => {
    console.time( 'time' )

    greeter.say( 'Hello' , user , error => {
        if( error ) return done( error )

        greeter.say( 'Bye' , user , error => {
            if( error ) return done( error )

            console.timeEnd( 'time' )

            return done()
        } )

    } )

}

script( error => {
    if( error ) {
        console.error( error )
        process.exit( 1 )
    }
} )
