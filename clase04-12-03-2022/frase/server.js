import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let frase = "Hola curso Coderhouse backend";
let fraseArr = frase.split(" ");

app.get("/api/frase", (req, res) => {
  res.json({
    frase,
  });
});

app.get("/api/palabras/:pos", (req, res) => {
  const { pos } = req.params;
  if (Number(pos) > fraseArr.length || Number(pos) < 1) {
    res.status(400).send("La posición no existe");
  } else {
    res.status(200).json({ buscada: fraseArr[pos - 1] });
  }
});

app.post("/api/palabras", (req, res) => {
  const { palabra } = req.body;
  fraseArr.push(palabra);
  frase = fraseArr.join(" ");
  res.json({
    agregada: palabra,
    pos: fraseArr.length,
  });
});

app.put("/api/palabras/:pos", (req, res) => {
  const { pos } = req.params;
  const { palabra } = req.body;
  if (Number(pos) > fraseArr.length || Number(pos) < 1) {
    res.status(400).send("La posición no existe");
  } else {
    const obj = {
      actualizada: palabra,
      anterior: fraseArr[pos - 1],
    };
    fraseArr[pos - 1] = palabra;
    frase = fraseArr.join(" ");
    res.json(obj);
  }
});

app.delete("/api/palabras/:pos", (req, res) => {
  const { pos } = req.params;
  if (Number(pos) > fraseArr.length || Number(pos) < 1) {
    res.status(400).send("La posición no existe");
  } else {
    const obj = {
      borrada: fraseArr[pos - 1],
    };
    fraseArr.splice(pos - 1, 1);
    frase = fraseArr.join(" ");
    res.json(obj);
  }
});

const PORT = 3000;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
