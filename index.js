var user = require( './user' )
var greeter = require( './greeter' )

var script = done => {
    console.time( 'time' )

    greeter.say( 'Hello' , user , error => {
        if( error ) return done( error )

        greeter.say( 'Bye' , user , error => {
            if( error ) return done( error )

            console.timeEnd( 'time' )

            done()
        } )

    } )

}

script( error => {
    if( !error ) return

    console.error( error )
} )
