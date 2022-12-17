const socket = io();
let name = document.getElementById("name");

socket.on("Welcome", (arg) => {
  console.log(arg);
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
  });
}
