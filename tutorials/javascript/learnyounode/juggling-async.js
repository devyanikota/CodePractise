http = require("http");
urls = process.argv.slice(2);
collected_data = [];
counter = 3;
function responses(i, url){
    http.get(url, function(resp){
        var str = '';
        resp.setEncoding("utf8")
        resp.on("data", function(data){
            str = str + data;
        });
        resp.on("end", function(){
            collected_data[i] = str
            counter--;
            if(counter === 0){
                print()
            }
        });
        resp.on("error", console.error);
    });
}

for(var i=0; i <urls.length; i++){
    responses(i, urls[i])
}
function print(){
    for(var i =0; i<collected_data.length;i++){
        console.log(collected_data[i])
    }
}

