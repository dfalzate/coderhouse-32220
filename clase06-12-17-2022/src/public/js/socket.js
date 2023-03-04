const socket = io();
let name = document.getElementById("name");
let submit = document.getElementById("submit");
let message = document.getElementById("message");
let messages = document.getElementById("messages");

let newMessages = [];

socket.on("Welcome", (arg) => {
  console.log(arg);
  newMessages = arg.messages;
  console.log(newMessages);
  imprimirMessages(newMessages);
});

let user = null;

if (!user) {
  Swal.fire({
    title: "Identificate",
    input: "text",
    text: "Nombre de usuario",
    allowOutsideClick: false,
    inputValidator: (value) => {
      return !value && "Necesitas escribir un nombre de usuario";
    },
  }).then((newUser) => {
    user = newUser.value;
    name.innerText = user;
    socket.emit("newUser", user);
  });
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const messageText = message.value.trim();
  message.value = "";
  console.log("Cliente: ", messageText);
  socket.emit("message", { user, message: messageText, date: new Date() });
});

socket.on("message", (data) => {
  console.log("Mensaje recibido: ", data);
  newMessages.push(data);
  imprimirMessages(newMessages);
});

function imprimirMessages(newMessages) {
  let _newMessages = "";
  for (const message of newMessages) {
    _newMessages += `${message.user}: ${message.message} - ${message.date}\n`;
  }
  messages.innerText = _newMessages;
}

socket.on("newUser", (nombre) => {
  Swal.fire({
    text: `Nuevo usuari@ ${nombre} conectad@!`,
    toast: true,
    position: "top-right",
  });
});