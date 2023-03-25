import express from "express";
import config from "./config/config.js";
if (config.mongo_uri) import("./config/db.js");
import logger from "./utils/logger.js";
import loggerMiddleware from "./middlewares/logger.middleware.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loggerMiddleware);

app.get("/", (req, res) => {
  logger.warn("Este es un warn");
  res.send("Warn");
});
app.get("/error", (req, res) => {
  logger.error("Este es un error");
  res.send("Error");
});
app.get("/todos", (req, res) => {
  logger.silly("Mensaje silly");
  logger.log("debug", "Mensaje debug");
  logger.verbose("Mensaje verbose");
  logger.http("Mensaje http");
  logger.info("Mensaje info");
  logger.warn("Mensaje warn");
  logger.error("Mensaje error");
  res.send("Todos");
});

const server = app.listen(config.port, () =>
  console.log(`🔥 Server started on port http://localhost:${config.port}`),
);
server.on("error", (err) => console.log(err));
