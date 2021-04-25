
module.exports = function(port){
	let ws = require("nodejs-websocket")
    let connections = [];

	ws.createServer(function(conn) {
		connections.push(conn);
		console.log("New websocket connection");
		conn.on("text", function (str) {
			console.log("Received " + str)
		});
		conn.on("close", function (code, reason) {
			console.log("Closing websocket");
		})
		conn.on("error",function(err){
            let index = connections.indexOf(conn);
            connections.splice(index, 1);
			console.log("Websocket error");
		});
	}).listen(port);
	console.log("WebSocket server listening port " + port);
}