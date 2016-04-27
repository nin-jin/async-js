require( 'jin' ).application( $ => {

    var $my = $.jin.loader( __dirname + '/' )

    $my.greeter.say( 'Hello' , $my.user )
    $my.greeter.say( 'Bye' , $my.user )
} )
