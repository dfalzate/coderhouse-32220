import express from "express";
import "./config/db.js";
import fs from "fs";
import { UserModel } from "./models/user.model.js";

const users = JSON.parse(fs.readFileSync("Users.json", "utf-8"));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/create", async (req, res) => {
  await UserModel.create(users);
  res.send("Usuarios creados correctamente");
});

app.get("/measure", async (req, res) => {
  const response = await UserModel.find({ first_name: "Orly" }).explain("executionStats");
  console.log(response);
  res.json(response);
});


const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));
