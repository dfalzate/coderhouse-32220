import express from "express";
import dotenv from "dotenv";
dotenv.config();
if (process.env.MONGO_URI) import("./config/db.js");
import cookie from "cookie-parser";
import session from "express-session";
import auth from "./middlewares/auth.middleware.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookie());
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitializated: false,
  }),
);

app.get("/", (req, res) => {
  let nombre = req.query.nombre;
  if (req.session.contador) {
    req.session.contador++;
    res.send(`${req.session.nombre} ha visitado la página ${req.session.contador} veces`);
  } else {
    req.session.nombre = nombre;
    req.session.contador = 1;
    res.send("Te damos la Bienvenida!!");
  }
});

app.get("/contador", (req, res) => {
  if (req.session.contador) {
    req.session.contador++;
    res.send(`Has visitado la pagina ${req.session.contador} veces`);
  } else {
    req.session.contador = 1;
    res.send("Bienvenido!");
  }
});

app.get("/login", (req, res) => {
  const { name, password } = req.query;
  if (name === "coderhouse" && password === "123456") {
    req.session.login = true;
    res.send("login correcto");
  } else {
    res.send("Nombre o password incorrecto");
  }
});

app.get("/restringida", auth, (req, res) => {
  res.send("Información restringida");
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.json(err);
    } else {
      res.send("Salio de la aplicación");
    }
  });
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`🔥 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
