import express from "express";
import config from "./config/config.js";
import cors from "cors";
import userRouter from "./routers/user.router.js";
import productRouter from "./routers/product.router.js";
import businessRouter from "./routers/business.router.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors(),
  // cors({
  //   origin: "http://localhost:3001",
  //   methods: ["GET", "POST", "DELETE", "PUT"],
  // }),
);
app.use("/api/users", userRouter.getRouter());
app.use("/api/products", productRouter.getRouter());
app.use("/api/businesses", businessRouter.getRouter());

const server = app.listen(config.port, () =>
  console.log(`🔥 Server started on port http://localhost:${config.port}`),
);
server.on("error", (err) => console.log(err));
