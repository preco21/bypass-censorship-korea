var dns = require("dns");
var filternet = require("filternet");

var myProxy = filternet.createProxyServer({
	port: 8080,
	recompress: false
});

myProxy.on("interceptRequest", function(requestOptions, callback)
{
	dns.lookup(requestOptions.host, function(err, addresses, family)
	{
		requestOptions.headers.host = addresses;
		callback(requestOptions);
	});
});