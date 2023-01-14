import express from "express";
import * as UserController from "../controllers/user.controller.js";

const route = express.Router();

route.get("/", UserController.getUsers);
route.get("/:idUsuario", UserController.getUser);
route.post("/", UserController.createUser);
route.put("/:idUsuario", UserController.updateUser);
route.delete("/:idUsuario", UserController.deleteUser);

export default route;
