import express, { Router } from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Aplicación

app.use((req, res, next) => {
  const date = new Date();
  console.log("Fecha y hora: ", date.toISOString());
  next();
});

//Endpoint

const midd1 = (req, res, next) => {
  const { nombre } = req.query;
  console.log(nombre);
  next();
};
const midd2 = (req, res, next) => {
  const { apellido } = req.query;
  console.log(apellido);
  next();
};

app.get("/", midd1, midd2, (req, res) => {
  res.send("Ok");
});

//Router

const router = Router();

router.use((req, res, next) => {
  const date = new Date();
  console.log("Fecha y hora ROUTER: ", date.toISOString());
  next();
});

router.get("/users", (req, res) => {
  res.send("Ok router");
});

app.use("/", router);

//Error

app.get("/error", (req, res) => {
  throw new Error("Mensaje de error");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: err.message });
});


const PORT = 3000;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
