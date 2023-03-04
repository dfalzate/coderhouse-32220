import express from "express";
import config from "./config/config.js";
if (config.mongo_uri) import("./config/db.js");
import UserRouter from "./routers/user.router.js";
import ToyRouter from "./routers/toy.router.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", UserRouter.getRouter());
app.use("/api/toys", ToyRouter.getRouter());


const server = app.listen(config.port, () =>
  console.log(`🔥 Server started on port http://localhost:${config.port}`),
);
server.on("error", (err) => console.log(err));
