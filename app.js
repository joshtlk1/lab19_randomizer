var ex = require("./lyrics.js");
var http = require("http");



// console.log(ex[selection]);

// creating server
http.createServer(function(request, response){
	var selection = Math.floor(Math.random()* ex.length);
	response.writeHead(200,{"Content-type":"text/plain"}); //sending status code, and sending body type
	response.write(ex[selection]);
	response.end();
}).listen(8888);