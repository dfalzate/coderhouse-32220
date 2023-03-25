import { Router } from "express";
import * as AuthController from "../controllers/auth.controller.js";

const router = new Router();

router.post("/login", AuthController.login);
router.get("/logout", AuthController.logout);

export default router;
