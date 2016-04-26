module.exports.say = ( greeting , user ) => {
    return user.getName().then( name => {
        console.log( greeting + ', ' + name + '!' )
    } )
}
