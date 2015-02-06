http = require("http");
url = process.argv[2];

http.get(url, function(resp){
    resp.setEncoding("utf8")
    resp.on("data", console.log)
    resp.on("error", console.error)
});
