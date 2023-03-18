import express from "express";
import config from "./config/config.js";
if (config.mongo_uri) import("./config/db.js");
import operaciones from "operaciones-coderhouse32220";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log(operaciones.suma(1, 3));
console.log(operaciones.resta(1, 3));
console.log(operaciones.multiplicacion(1, 3));
console.log(operaciones.division(1, 3));

const server = app.listen(config.port, () =>
  console.log(`🔥 Server started on port http://localhost:${config.port}`),
);
server.on("error", (err) => console.log(err));
