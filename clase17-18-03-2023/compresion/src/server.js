import express from "express";
import config from "./config/config.js";
if (config.mongo_uri) import("./config/db.js");
import compression from "express-compression";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  compression({
    brotli: { enabled: true, zlib: {} },
  }),
);

app.get("/string", (req, res) => {
  let string = "Hola curso backend 32220!";
  for (let i = 0; i < 17; i++) {
    string += string;
  }
  res.send(string);
});

const server = app.listen(config.port, () =>
  console.log(`🔥 Server started on port http://localhost:${config.port}`),
);
server.on("error", (err) => console.log(err));
