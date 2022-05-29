const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("welcome to about page");
  } else {
    res.end(`<h1>page not found</h2>`);
  }
});

server.listen(8000);
