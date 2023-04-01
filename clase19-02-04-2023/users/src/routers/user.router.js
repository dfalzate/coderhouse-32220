import { Router } from "express";
import * as UserController from "../controllers/user.controller.js";
import { createUserValidation } from "../middlewares/validation.middlewares.js";

const router = new Router();

router.post("/", createUserValidation, UserController.createUser);
router.get("/:email", UserController.getUser);
router.put("/updateUser/:email", UserController.updateUser);
router.put("/updatePassword/:email", UserController.updatePassword);

export default router;
