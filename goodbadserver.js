var http = require('http');

var PORT = 8080;
var PORT1 = 7000;
var PORT2 = 7500;

function handleRequests(request, response){
  response.end('you are connected' + request.url);
}

function goodRequests(request, response){
  response.end('youre ok');
}

function badRequests(request, response){
  response.end('you suck pretty bad');
}

var server = http.createServer(handleRequests);
var servergood = http.createServer(goodRequests);
var serverbad = http.createServer(badRequests);

server.listen(PORT, function(){
  console.log("SERVER is LISTENING: http://localhost:01", PORT);
});

servergood.listen(PORT1, function(){
  console.log("SERVER is LISTENING: http://localhost:01", PORT1);
});

serverbad.listen(PORT2, function(){
  console.log("SERVER is LISTENING: http://localhost:01", PORT2);
});
