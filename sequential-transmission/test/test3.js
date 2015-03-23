var http = require("http");
var net = require("net");
var url = require("url");

var proxy = http.createServer();

proxy.on("upgrade", function(req, ctlSocket, head)
{
	var srvUrl = url.parse("http://" + req.url);
	var srcSocket = net.connect(srvUrl.port, srvURL.hostname, function()
	{
		
		cltSocket.write('HTTP/1.1 200 Connection Established\r\n' +
                    'Proxy-agent: Node-Proxy\r\n' +
                    '\r\n');
		srvSocket.write(head);
		srvSocket.pipe(cltSocket);
		cltSocket.pipe(srvSocket);
	});
});

proxy.listen(8080);