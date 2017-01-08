var fs = require( 'fs' )

var Atom = require( 'mol_atom' ).$mol_atom
var Wait = require( 'mol_atom' ).$mol_atom_wait

var configText = new Atom( 'configText' , () => {

    fs.readFile( 'config.json' , ( error , text ) => {
        if( error ) config.push( error )
        configText.push( text )
    } )
    
    throw new Wait( 'Config loading...' )

} )

var config = new Atom( 'config' , () => {
    return JSON.parse( configText.get() )
} )

module.exports.getName = () => {
    return config.get().name
}
