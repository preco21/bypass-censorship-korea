var net = require('net');

var host = "test.com";
var path = "http://" + host + "/";

var http_request = "";
http_request += "\r\n"; // Dummy white space
http_request += "GET " + path + " HTTP/1.1";
http_request += "\r\n";
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

var client = net.connect(80, host, function()
{
	client.end(http_request);
});

client.setEncoding("utf8");

client.on("data", function(data)
{
	console.log(data);
});