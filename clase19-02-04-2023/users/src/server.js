import express from "express";
import config from "./config/config.js";
if (config.mongo_uri) import("./config/db.js");
import UserRouter from "./routers/user.router.js";
import AuthRouter from "./routers/auth.router.js";
import { faker } from "@faker-js/faker";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", UserRouter);
app.use("/api/auth", AuthRouter);
app.get("/api/test/user", (req, res) => {
  res.json({
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    age: faker.datatype.number({ min: 18, max: 80 }),
    email: faker.internet.email(),
    password: faker.internet.password(8),
  });
});

const server = app.listen(config.port, () =>
  console.log(`🔥 Server started on port http://localhost:${config.port}`),
);
server.on("error", (err) => console.log(err));
