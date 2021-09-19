const express = require('express');

let app = express();

app.get("/" ,function(request,response,next){
    response.send("hello with nodemon");
})

app.listen(3002,function(){
    console.log("web server啟動了");
})