#!/usr/bin/env node

var fs = require('fs')
var path = require('path')
var fileslist = new Array()

module.exports = function(dirname, filter, callback) {
        fs.readdir(dirname, function (err, files) {
        if (err) {
            return callback(err)
        }
        else
        for (var i =0; i < files.length; ++i){
            if (path.extname(files[i]) == "." + filter){
                fileslist.push(files[i])
            }
            else {
                continue
            }
        }
        return callback(null, fileslist)
    });
}
