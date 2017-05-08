// Using the previous example as a guide, create an app that has two web servers.
// One that listens on port 7000 and one that listens on port 7500.
// The one listening on port 7000 will always tell the user something good about themselves.
// The one listening on 7500 will always tell the user something bad about themselves.
// Make sure you create a Github repo and commit this code!
var http = require (“http”);

//port to listen on -- choose 80 or above
var PORT = 7000;

**//handle request / responses
**
function handleRequest (request, response) {
response.end(“It works!!” + request.url);
}
// create server
var server = http.createServer(handleRequest);
server.listener(PORT, function () {
console.log(“Server is listening on: http://localhost:%s", PORT")
});
