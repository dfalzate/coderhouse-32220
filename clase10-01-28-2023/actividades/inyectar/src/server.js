import express from "express";
import dotenv from "dotenv";
dotenv.config();
if (process.env.MONGO_URI) import("./config/db.js");
import cookie from "cookie-parser";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookie());

app.post("/createCookie", (req, res) => {
  const { name, email } = req.body;
  res.cookie("cookie", { user: { name, email } }).send("cookie creada");
});

app.get("/readCookie", (req, res) => {
  const { cookie } = req.cookies;
  if (cookie) {
    res.json(cookie);
  } else {
    res.send("La cookie no existe");
  }
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`🔥 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
