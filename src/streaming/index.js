(function() {

var http = require("http");
var net = require("net");
var url = require("url");
	
var PORT = 8080;
	
var proxyServer = http.createServer(requestHandler);
	
function requestHandler(request, response)
{	
	var uri = url.parse(request.url);
	var requestLine = request.method + " " + uri.path + " HTTP/" + request.httpVersion + "\r\n";
	var requestHeader = "";
	
	var headers = request.headers;
	
	for (var i in headers)
		requestHeader += i + ": " + headers[i] + "\r\n";
	
	requestHeader += "\r\n";
	
	request.on("data", function(data)
	{
		requestHeader += data;
	});
	
	request.on("end", function(data)
	{
		requestHeader += data;
		
		var client = net.connect(uri.port || 80, uri.host, function()
		{	
			client.setKeepAlive(true);
			client.write(requestLine);
			client.write(requestHeader);
			
			client.pipe(request.connection, {
				end: true
			});
			
			// For test
			//request.connection.pipe(client);
		});

		client.on("error", function(error)
		{
		});
	});
}

proxyServer.listen(PORT);
	
})();