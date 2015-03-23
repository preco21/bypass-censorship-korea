	/*
	client.on("data", function(data)
	{
		//completeData += data.toString("hex");
		
		if (data.toString("utf8").lastIndexOf("0\r\n"))
			client.end();
			
	});
	
	client.on("end", function()
	{
	//var tempBuffer = new Buffer(completeData, "hex");
	//console.log(1);
	return;
		var tempBuffer = new Buffer(completeData, "hex");
		var tempData = tempBuffer.toString("utf8").split("\r\n\r\n");
		var content = tempBuffer.slice(tempData[0].length + 4 + tempData[1].indexOf("\r\n") + 2, tempData[1].lastIndexOf("0\r\n"));
		content = tempBuffer.slice(tempData[0].length + 4, parseInt(headers["Content-Length"]));
		var responseData = parseHeader(tempData.splice(0, 1)[0]);
		var headers = responseData.headers;
		
		if (headers["Content-Range"])
			content = tempBuffer.slice(headers["Content-Range"].)
		else if (headers["Content-Length"])
			
		
			
		
		response.writeHead(parseInt(responseData.response.split(" ")[1]), responseData.response.split(" ")[2], headers);
		
		//response.end(tempBuffer.toString("utf8"));
		response.end(content);
		
		//response.end(content);
		
		switch(responseData.headers["Content-Encoding"])
		{
			case "gzip":
				zlib.gunzip(content, function(_, result)
				{
					response.end(result);
				});
				break;
			
			case "deflate":
				zlib.inflate(content, function(_, result)
				{
					response.end(result);
				});				
				break;
			
			default:
				response.end(content);
		}
		
		
		//response.end(content, "binary");
	});
}
	
function parseHeader(headers)
{
	var headerList = headers.split("\r\n");
	var headerObject = {};
	var responseLine = headerList.splice(0, 1)[0];
	
	for (var i = 0; i < headerList.length; i++)
	{
		var headerSet = headerList[i].split(": ");
		headerObject[headerSet[0]] = headerSet[1];
	}
	
	return {
		response: responseLine,
		headers: headerObject
	};
}
*/