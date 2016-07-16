module.exports.say = ( greeting , user , done ) => {

    user.getName( ( error , name ) => {
        if( error ) return done( error )

        console.log( greeting + ', ' + name + '!' )

        return done()
    })

}
