var user = require( './user' )
var greeter = require( './greeter' )

var script = done => {
    try {
        console.time( 'time' )

        greeter.say( 'Hello' , user , error => {
            if( error ) return done( error )

            try {

                greeter.say( 'Bye' , user , error => {
                    if( error ) return done( error )

                    try {
                        console.timeEnd( 'time' )
                    } catch( error ) {
                        return done( error )
                    }

                    return done()
                } )

            } catch( error ) {
                return done( error )
            }
            
        } )

    } catch( error ) {
        return done( error )
    }
}

script( error => {
    if( error ) {
        console.error( error )
        process.exit( 1 )
    }
} )
