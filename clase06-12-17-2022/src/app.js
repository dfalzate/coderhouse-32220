import express from "express";
import { engine } from "express-handlebars";
import viewsRouter from "./routers/views.route.js";
import { Server } from "socket.io";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("src/public"));
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "src/views");

app.use("/", viewsRouter);

app.use("/api/users", (req, res) => {
  res.json({ user: [] });
});

const PORT = 3000;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));

const socketServer = new Server(server);

const messages = [];
socketServer.on("connection", (socket) => {
  console.log("Nueva conexión");
  socket.emit("Welcome", { welcome: "Bienvenido al nuevo campeón Argentina! 🇦🇷", messages });

  socket.on("disconnect", () => {
    console.log("Cliente desconectado");
  });

  socket.on("message", (data) => {
    console.log("Servidor:", data);
    messages.push(data);
    socketServer.emit("message", data);
  });

  socket.on("newUser", (nombre) => {
    socket.broadcast.emit("newUser", nombre);
  });
});
