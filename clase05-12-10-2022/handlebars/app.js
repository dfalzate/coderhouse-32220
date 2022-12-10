import express from "express";
import { engine } from "express-handlebars";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "handlebars/views");

app.use("/", (req, res) => {
  res.render("index", {
    title: "Hola Handlebars",
    nombre: "Coderhouse",
    apellido: "Backend",
  });
});

const PORT = 3000;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
