import { Router } from "express";
import * as UserController from "../controllers/user.controller.js";
import { auth } from "../middleware/auth.middleware.js";
import { authToken } from '../middleware/jwt.middleware.js';
const router = new Router();

router.post("/", UserController.createUser);
router.get("/:email", authToken, UserController.getUser);
router.put("/updateUser/:email", authToken, UserController.updateUser);
router.put("/updatePassword/:email", auth, UserController.updatePassword);

export default router;
