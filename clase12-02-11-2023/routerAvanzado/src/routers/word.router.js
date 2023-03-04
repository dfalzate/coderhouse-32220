import { Router } from "express";
import { WordModel } from "../models/word.model.js";

const router = Router();

router.get(
  "/:word([a-zA-Z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%81%C3%89%C3%8D%C3%93%C3%9A]+)",
  async (req, res) => {
    try {
      if (!req.word) return res.status(400).send({ message: "La palabra no existe" });
      const word = await WordModel.create({ word: req.params.word });
      res.status(201).send({ message: "Palabra creada", word });
    } catch (error) {
      throw new Error(error.message);
    }
  },
);
router.post(
  "/:word([a-zA-Z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%81%C3%89%C3%8D%C3%93%C3%9A]+)",
  async (req, res) => {
    try {
      if (req.word) return res.status(400).send({ message: "La palabra ya existe" });
    } catch (error) {
      throw new Error(error.message);
    }
  },
);
router.delete(
  "/:word([a-zA-Z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%81%C3%89%C3%8D%C3%93%C3%9A]+)",
  async (req, res) => {
    try {
      console.log(req);
      if (!req.word) return res.status(400).send({ message: "La palabra no existe" });
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

router.param("word", async (req, res, next, word) => {
  try {
    // const regex =/^[a-zA-Z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%81%C3%89%C3%8D%C3%93%C3%9A]+$/

    const _word = await WordModel.findOne({ word });
    req.word = _word;
    next();
  } catch (error) {
    throw new Error(error.message);
  }
});

router.get("*", (req, res) => [res.send({ message: "Palabra no valida" })]);

export default router;
