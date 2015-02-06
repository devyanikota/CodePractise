require('http').createServer(function (request, response) {
    if(request.method !=='POST'){
        return response.end('POST Only!\n')
    }
    request.pipe(require('through2-map')(function (chunk){
        return chunk.toString().toUpperCase()
    })).pipe(response)
}).listen(process.argv[2])
