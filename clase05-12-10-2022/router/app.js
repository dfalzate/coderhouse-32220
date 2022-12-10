import express from "express";
import petsRouter from "./routers/pets.router.js";
import usersRouter from "./routers/users.router.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("router/public"));

app.use("/api/pets", petsRouter);
app.use("/api/users", usersRouter);

const PORT = 3000;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
