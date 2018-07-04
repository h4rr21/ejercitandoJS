var http = require('http');
var port = 3000;

const requestHandler = (request, response) => {
    console.log(request.url);
    response.end("Hello HTTP server");
};

const server = http.createServer(requestHandler);

server.listen(port, err => {
    if (err){
        return console.log("I'm logging an error",err);
    }

    console.log('Server running at port: ',server.address().port);
})