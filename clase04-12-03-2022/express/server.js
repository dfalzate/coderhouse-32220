import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const usuarios = [
  {
    id: 1,
    nombre: "Luis 1",
    apellido: "Tang",
    edad: "19",
    correo: "asfjhask@gmail.com",
  },
  {
    id: 2,
    nombre: "Luis 2",
    apellido: "Tang",
    edad: "19",
    correo: "asfjhask@gmail.com",
  },
];

const PORT = 8080;

app.get("/saludo", (req, res) => {
  res.send("<h1>Hola Coderhouse desde express</h1>");
});

app.get("/bienvenida", (req, res) => {
  res.send("<h1 style:'color:blue'>Bienvenido!</h1>");
});

app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

app.get("/usuarios/:idUsuario/:nombre", (req, res) => {
  console.log(req);
  const { idUsuario, nombre } = req.params;
  // if (idUsuario) {
  console.log(idUsuario, nombre);
  const usuario = usuarios.find((usuario) => usuario.id == idUsuario);
  res.json(usuario);
  // } else {
  //   res.json(usuarios);
  // }
});

app.get("/getUsuario/:apellido", (req, res) => {
  const { apellido } = req.params;
  const { idUsuario, nombre } = req.query;
  console.log(idUsuario, nombre, apellido);
  const usuario = usuarios.find((usuario) => usuario.id == idUsuario);
  res.json(usuario);
});

app.listen(PORT, () => {
  console.log(`🔥 Listening on port ${PORT}`);
});
