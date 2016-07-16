var Future = require( 'fibers/future' )

var user = require( './user' )
var greeter = require( './greeter' )

Future.task( () => {

    try {

        console.time('time')
        greeter.say('Hello', user)
        greeter.say('Bye', user)
        console.timeEnd('time')

    } catch( error ) {
        console.error( error )
    }

} ).detach()
