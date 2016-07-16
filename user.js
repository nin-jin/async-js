var fs = require( 'fs' )

var config

var getConfig = done => {

    if( config ) return setImmediate( () => {
        return done( null , config )
    })

    fs.readFile( 'config.json' , ( error , configText ) => {
        if( error ) return done( error )

        try {
            config = JSON.parse( configText )
        } catch( error ) {
            return done( error )
        }

        return done( null , config )
    })

}

module.exports.getName = done => {

    getConfig( ( error , config ) => {
        if( error ) return done( error )

        try {
            var name = config.name
        } catch( error ) {
            return done( error )
        }

        return done( null , name )
    } )

}
