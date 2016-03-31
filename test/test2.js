var net = require('net');

var host = "gelbooru.com";
var path = "http://" + host + ".com";

var http_request = "";
http_request += "Connection: keep-alive";
http_request += "\r\n";
http_request += "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8";
http_request += "\r\n";
http_request += "Accept-Language: ko-KR,ko;q=0.8,en-US;q=0.6,en;q=0.4";
http_request += "\r\n";
http_request += "User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2300.0 Safari/537.36";
http_request += "\r\n";
http_request += "Host: " + host;
http_request += "\r\n";
http_request += "Accept-Encoding: gzip";
http_request += "\r\n";
http_request += "\r\n";

var client = net.connect(80, host, function()
{
	client.setKeepAlive(true);
	client.write("GET / HTTP/1.1\r\n");
	client.write(http_request);
});

client.setEncoding("utf8");

client.on("data", function(data)
{
	//console.log(data);
	
	console.log(data);
	
	if (data == "kill")
		console.log("[aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa]");
	/*
	if (data.indexOf("0\r\n\r\n") != -1)
	{
		console.log("END");
		client.end();
	}
	*/
});

client.on("end", function()
{
	console.log("END2");
});

client.on("error", function(error)
{
	console.log(error);
});