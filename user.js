var fs = require( 'fs' )
var Future = require( 'fibers/future' )

var config

var getConfig = () => {
    if( config ) return config

    var configText = new Future
    fs.readFile( 'config.json' , configText.resolver() )
    return config = JSON.parse( configText.wait() )
}

module.exports.getName = () => {
    return getConfig().name
}
