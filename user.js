var fs = require( 'fs' )

var Atom = require( 'mol_atom' ).$mol_atom
var Wait = require( 'mol_atom' ).$mol_atom_wait

var config = new Atom( 'config' , () => {

    fs.readFile( 'config.json' , ( error , configText ) => {
        if( error ) config.push( error )

        try {
            config.push( JSON.parse( configText ) )
        } catch( error ) {
            config.push( error )
        }
    } )
    
    throw new Wait( 'Config loading...' )

} )

module.exports.getName = () => {
    return config.get().name
}
