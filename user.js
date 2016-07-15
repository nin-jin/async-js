var fs = require( 'fs' )

var config

var getConfig = () => {
    if( config ) return config

    return config = new Promise( ( resolve , reject ) => {
        fs.readFile( 'config.json' , ( error , configText ) => {
            if( error ) return reject( error )

            resolve( JSON.parse( configText ) )
        } )
    } )
}

module.exports.getName = async () => {
    return ( await getConfig() ).name
}
