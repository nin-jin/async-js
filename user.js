var fs = require( 'fs' )

var config

var getConfig = () => {
    return new Promise( ( resolve , reject ) => {
        if( config ) return resolve( config )

        fs.readFile( 'config.json' , ( error , configText ) => {
            if( error ) return reject( error )

            return resolve( config = JSON.parse( configText ) )
        } )
    } )
}

module.exports.getName = () => {
    return getConfig().then( config => {
        return config.name
    } )
}
