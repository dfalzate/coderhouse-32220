import express from "express";
import { engine } from "express-handlebars";
import petsRouter from "./routers/pets.router.js";
import { usersRouter } from "./routers/users.router.js";
import viewsRouter from "./routers/views.router.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("router/public"));
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "router/views");

app.use("/api/pets", petsRouter);
app.use("/api/users", usersRouter);

app.use("/views", viewsRouter);

const PORT = 3000;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
