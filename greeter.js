var co = require( 'co' )

module.exports.say = co.wrap( function* ( greeting , user ) {
    console.log( greeting + ', ' + ( yield user.getName() ) + '!' )
} )
