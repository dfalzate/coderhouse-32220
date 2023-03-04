import express from "express";

const app = express();
app.use(express.json()); //POST Body
app.use(express.urlencoded({ extended: true })); //Query

let usuarios = [
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

app.post("/usuarios", (req, res) => {
  const { id, nombre, apellido, edad, correo } = req.body;
  console.log(id, edad, correo);
  usuarios.push(req.body);
  res.status(201).json(usuarios);
});

app.delete("/usuarios/:idUsuario", (req, res) => {
  const { idUsuario } = req.params;
  usuarios = usuarios.filter((usuario) => usuario.id != idUsuario);
  res.status(200).json(usuarios);
});

app.put("/usuarios/:idUsuario", (req, res) => {
  const { idUsuario } = req.params;
  const { nombre } = req.body;
  const usuario = usuarios.find((usuario) => {
    if (usuario.id == idUsuario) {
      usuario.nombre = nombre;
    }
    return usuario;
  });
  res.status(202).json(usuario);
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
