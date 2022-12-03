const http = require("http");

const server = http.createServer((req, res) => {
  res.write(req.url);
  res.write("<h1 style='color:blue'>Hola Coderhouse</h1>");
  res.end();
});

server.listen(3000, () => {
  console.log("🔥 Listening on port 3000");
});
