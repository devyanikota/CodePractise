http = require("http");
url = process.argv[2];
collected_data = []

http.get(url, function(resp){
    resp.setEncoding("utf8")
    resp.on("data", function(data){
        collected_data.push(data)
    });
    resp.on("end", function(){
        console.log(collected_data.join("").length);
        console.log(collected_data.join(""));
    });
    resp.on("error", console.error);
});

