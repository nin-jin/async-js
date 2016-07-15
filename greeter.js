module.exports.say = async ( greeting , user ) => {
    console.log( greeting + ', ' + ( await user.getName() ) + '!' )
}
