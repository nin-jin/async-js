var fs = require( 'fs' )

var config

var getConfig = () => {
    if( config ) return config

    var configText = fs.readFileSync( 'config.json' )
    return config = JSON.parse( configText )
}

module.exports.getName = () => {
    return getConfig().name
}
