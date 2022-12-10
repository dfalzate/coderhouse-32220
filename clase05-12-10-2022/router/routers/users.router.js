import { Router } from "express";

const users = [];

const router = Router();

router.get("/", (req, res) => {
  res.json(users);
});

router.post("/", (req, res) => {
  users.push(req.body);
  res.status(201).json(users);
});

export default router;
