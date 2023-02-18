import express from "express";
import config from './config/config.js'
if (config.mongo_uri) import("./config/db.js");
import CalculoRouter from './routers/calculos.router.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/calculos',CalculoRouter)


const server = app.listen(config.port, () =>
  console.log(`🔥 Server started on port http://localhost:${config.port}`),
);
server.on("error", (err) => console.log(err));
