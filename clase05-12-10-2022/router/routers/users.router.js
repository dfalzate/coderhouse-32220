import { Router } from "express";
import fs from "fs";

const users = [];

const usersRouter = Router();

usersRouter.get("/", (req, res) => {
  res.json(users);
});

usersRouter.post("/", (req, res) => {
  users.push(req.body);
  fs.writeFileSync("users.json", JSON.stringify(users));
  res.redirect("/views");
});

export { usersRouter, users };
