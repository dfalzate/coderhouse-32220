import { Router } from "express";
import fs from "fs";

const router = Router();

router.get("/", (req, res) => {
  const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));
  res.render("users", {
    style: "style2.css",
    users,
  });
});

export default router;
