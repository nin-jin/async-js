var fs = require( 'fs' )

var config

var getConfig = done => {

    if( config ) {

        process.nextTick( () => {
            done( null , config )
        } )

    } else {

        fs.readFile( 'config.json' , ( error , configText ) => {
            if( error ) return done( error )

            try {
                config = JSON.parse( configText )
            } catch( error ) {
                return done( error )
            }

            done( null , config )
        } )

    }
}

module.exports.getName = done => {

    getConfig( ( error , config ) => {
        if( error ) done( error )

        done( null , config.name )
    } )

}
