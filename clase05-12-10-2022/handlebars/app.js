import express from "express";
import { engine } from "express-handlebars";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "handlebars/views");

const users = [
  {
    name: "ivan",
    lastName: "talijancic",
    age: "32",
    email: "jskldhfd@test.com",
    tel: "87452857",
  },
  {
    name: "ivan2",
    lastName: "talijancic",
    age: "32",
    email: "jskldhfd@test.com",
    tel: "87452857",
  },
  {
    name: "ivan3",
    lastName: "talijancic",
    age: "32",
    email: "jskldhfd@test.com",
    tel: "87452857",
  },
  {
    name: "ivan4",
    lastName: "talijancic",
    age: "32",
    email: "jskldhfd@test.com",
    tel: "87452857",
  },
  {
    name: "ivan5",
    lastName: "talijancic",
    age: "32",
    email: "jskldhfd@test.com",
    tel: "87452857",
  },
];

app.get("/", (req, res) => {
  res.render("index", {
    title: "Hola Handlebars",
    nombre: "Coderhouse",
    apellido: "Backend",
  });
});

app.get("/user", (req, res) => {
  const user = users[Math.floor(Math.random() * 5)];
  res.render("index", {
    title: "Handlebars",
    ...user,
  });
});

app.get("/users", (req, res) => {
  res.render("lista", {
    // title: "Handlebars",
    users,
  });
});

const PORT = 3000;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
