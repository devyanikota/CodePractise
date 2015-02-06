require('./ls-modular.js')(process.argv[2], process.argv[3], function(err, list) {
    if (err) {
        throw err
    }
    list.forEach(function (fileslist) {
        console.log(fileslist)
  })
})

