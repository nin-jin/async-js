var user = require( './user' )
var greeter = require( './greeter' )

async function x() {
    console.time('time')
    await greeter.say('Hello', user)
    await greeter.say('Bye', user)
    console.timeEnd('time')
}

x()