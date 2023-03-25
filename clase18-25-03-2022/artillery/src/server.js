import express from "express";
import config from "./config/config.js";
if (config.mongo_uri) import("./config/db.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/simple', (req, res) => {
  let contador=0
  for (let i = 0; i<1e5; i++) {
    contador++
  }
  res.send(`Conteo: ${contador}`)
})

app.get('/compleja', (req, res) => {
  let contador=0
  for (let i = 0; i<1e8; i++) {
    contador++
  }
  res.send(`Conteo: ${contador}`)
})

const server = app.listen(config.port, () =>
  console.log(`🔥 Server started on port http://localhost:${config.port}`),
);
server.on("error", (err) => console.log(err));
