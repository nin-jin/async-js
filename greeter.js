module.exports.say = ( greeting , user , done ) => {
    user.getName( ( error, name ) => {
        if( error ) return done( error )

        try {
            console.log( greeting + ', ' + name + '!' )
        } catch( error ) {
            return done( error )
        }

        return done()
    } )
}
