var fs = require( 'fs' )
var co = require( 'co' )

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

module.exports.getName = co.wrap( function* () {
    return ( yield getConfig() ).name
} )
