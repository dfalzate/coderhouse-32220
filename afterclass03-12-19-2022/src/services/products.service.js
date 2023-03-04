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
