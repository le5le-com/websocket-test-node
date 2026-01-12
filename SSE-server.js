var http = require("http");

const getData = ()=>{
  return JSON.stringify([{
    id:'data-0-1',
    value: parseFloat(Math.random().toFixed(2))
  },
  {
    id:'data-0-100',
    value: Math.floor(Math.random() * 1000)
  },
  {
    id:'data-bool',
    value:Math.round(Math.random())
  }])
}

http.createServer(function (req, res) {
  var fileName = "." + req.url;

  if (fileName === "./stream") {
    res.writeHead(200, {
      "Content-Type":"text/event-stream",
      "Cache-Control":"no-cache",
      "Connection":"keep-alive",
      "Access-Control-Allow-Origin": '*',
    });
    res.write("retry: 10000\n");
    res.write("event: connecttime\n");
    res.write("data: " + (getData()) + "\n\n");
    res.write("data: " + (getData()) + "\n\n");

    interval = setInterval(function () {
      res.write("data: " + (getData()) + "\n\n");
    }, 1000);
    
    req.addListener("close", function () {
      clearInterval(interval);
    }, false);
  }
}).listen(8844, "127.0.0.1");