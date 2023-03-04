import { Router } from "express";
import * as UserService from "../services/users.service.js";

const router = Router();

// create user

router.post("/", async (req, res) => {
  try {
    const { body } = req;
    await UserService.createUser(body);
    res.status(201).send("Usuario creado");
  } catch (error) {
    res.status(400).send(error);
  }
});

// get user
router.get("/:name", (req, res) => {
  try {
    const { name } = req.params;
    const user = UserService.getUser(name);
    res.json(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// get users

router.get("/", (req, res) => {
  try {
    const users = UserService.getUsers();
    res.json(users);
  } catch (error) {
    res.status(400).send(error);
  }
});

// update user

router.put("/:name", (req, res) => {
  try {
    const { name } = req.params;
    const { body } = req;
    const newUser = UserService.updateUser(name, body);
    console.log(newUser);
    res.json(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
