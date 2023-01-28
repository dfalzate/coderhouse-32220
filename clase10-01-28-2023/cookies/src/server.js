import express from "express";
import dotenv from "dotenv";
dotenv.config();
if (process.env.MONGO_URI) import("./config/db.js");
import cookie from "cookie-parser";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookie(process.env.SECRET));

app.get("/cookieIlimitada", (req, res) => {
  res
    .cookie("ilimitada", { message: "Esto es una cookie ilimitada" })
    .send("Cookie ilimitada creada");
});

app.get("/cookieLimitada", (req, res) => {
  res
    .cookie("limitada", { message: "Esto es una cookie limitada" }, { maxAge: 50000 })
    .send("Cookie limitada creada");
});

app.get("/cookieFirmada", (req, res) => {
  res
    .cookie(
      "firmada",
      { message: "Esto es una cookie Firmada desde Coderhouse" },
      { maxAge: 50000, signed: true },
    )
    .send("Cookie firmada creada");
});

app.get("/leerCookies", (req, res) => {
  const { ilimitada, limitada } = req.cookies;
  const { firmada } = req.signedCookies;
  console.log(ilimitada, limitada, firmada);
  res.json({ cookies: { ilimitada, limitada, firmada } });
});

app.get("/borrarCookie", (req, res) => {
  res.clearCookie("ilimitada").send("Cookie ilimitada borrada");
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`🔥 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
