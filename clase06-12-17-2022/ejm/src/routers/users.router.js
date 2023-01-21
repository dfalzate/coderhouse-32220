import { Router } from "express";
import UserService from "../services/user.usuarios.js";

const router = Router();

router.get("/", (req, res) => {
  res.json(UserService.getUsers());
});

router.post("/", (req, res) => {
  const { body } = req;
  UserService.addUser(body);
  res.status(201).send("Usuario creado");
});

export default router;
