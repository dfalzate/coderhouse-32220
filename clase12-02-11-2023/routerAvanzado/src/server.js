import express from "express";
import dotenv from "dotenv";
dotenv.config();
if (process.env.MONGO_URI) import("./config/db.js");
import WordRouter from "./routers/word.router.js";
import WordCustomRouter from "./routers/wordCustom.route.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/word", WordRouter);
app.use("/api/wordCustom", WordCustomRouter.getRouter());

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`🔥 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
