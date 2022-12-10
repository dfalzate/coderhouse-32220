import { Router } from "express";

const pets = [];

const router = Router();

router.get("/", (req, res) => {
  res.json(pets);
});

router.post("/", (req, res) => {
  pets.push(req.body);
  res.status(201).json(pets);
});

export default router;
