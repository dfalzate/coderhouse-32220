import express from "express";
import config from "./config/config.js";
import cors from "cors";
if (config.mongo_uri) import("./config/db.js");
import PaymentRouter from "./router/payment.router.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/payments", PaymentRouter);

const server = app.listen(config.port, () =>
  console.log(`🔥 Server started on port http://localhost:${config.port}`),
);
server.on("error", (err) => console.log(err));
