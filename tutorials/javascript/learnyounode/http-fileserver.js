require('http').createServer(function (request, response) {
  response.writeHead(200, 'content-type: text/plain')
  require('fs').createReadStream(process.argv[3]).pipe(response)
}).listen(process.argv[2])
