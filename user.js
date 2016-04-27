var $ = require( 'jin' ).loader()

var config

var getConfig = () => {
    if( config ) return config

    var configText = $.fs.readFileSync( 'config.json' ) // realy async!
    return config = JSON.parse( configText )
}

module.exports.getName = () => {
    return getConfig().name
}
