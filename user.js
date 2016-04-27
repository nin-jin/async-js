var fs = require( 'fs' )

var Atom = require( 'jin2' ).Atom

var config = new Atom( () => {

    fs.readFile( 'config.json' , ( error , configText ) => {
        if( error ) config.fail( error )

        try {
            config.push( JSON.parse( configText ) )
        } catch( error ) {
            config.fail( error )
        }
    } )

} )

module.exports.getName = () => {
    return config.get().name
}
