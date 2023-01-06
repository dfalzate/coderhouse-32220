import express from "express";
import dotenv from "dotenv";
import { Server } from "socket.io";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));

const socketServer = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const users = [];
const messages = [];

socketServer.on("connection", (socket) => {
  console.log("🔥 Nueva conexión");
  socket.emit("welcome", "🔥 Nueva conexión");
  socket.on("newUser", (user) => {
    users.push(user);
    socketServer.emit("newUser", { users, messages });
  });
  socket.on("newMessage", (message) => {
    messages.push(message);
    socket.broadcast.emit("newMessage", message);
  });
});
