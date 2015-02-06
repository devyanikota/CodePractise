var log = [];

function zeroFill(i){
    return(i<10 ? '0':'')+i
}

function now() {
    var d = new Date()
    return d.getFullYear() + '-'
    +zeroFill(d.getMonth() + 1) + '-'
    + zeroFill(d.getDate()) + ' '
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes())
}

require('net').createServer(function(socket){
    socket.end(now() + '\n')
}).listen(Number(process.argv[2]))

//Note: nc 127.0.0.1 8000
//along with the server running
