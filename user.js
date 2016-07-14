var Future = require( 'fibers/future' )
var FS = Future.wrap( require( 'fs' ) )

var config

var getConfig = () => {
    if( config ) return config

    var configText = FS.readFileFuture( 'config.json' )
    return config = JSON.parse( configText.wait() )
}

module.exports.getName = () => {
    return getConfig().name
}
