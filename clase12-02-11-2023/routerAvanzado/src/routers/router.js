import express from "express";
import jwt from "jsonwebtoken";

export default class Router {
  constructor() {
    this.router = express.Router();
    this.init();
  }

  getRouter() {
    return this.router;
  }

  init() {}

  get(path, policies, ...callbacks) {
    this.router.get(
      path,
      this.handlePolices(policies),
      this.generateCustomResponse,
      this.applyCallbacks(callbacks),
    );
  }

  post(path, policies, ...callbacks) {
    this.router.post(
      path,
      this.handlePolices(policies),
      this.generateCustomResponse,
      this.applyCallbacks(callbacks),
    );
  }

  generateCustomResponse(req, res, next) {
    res.sendSuccess = (payload) => res.send({ status: "success", payload });
    res.sendServerError = (error) => res.send({ status: "Server error", error });
    res.sendUserError = (error) => res.send({ status: "User Error", error });
    next();
  }

  handlePolices = (policies) => (req, res, next) => {
    if (policies.includes("PUBLIC")) return next();
    const authHeader = req.get("Authorization");
    if (!authHeader) return res.status(401).send({ status: "error", message: "Unauthorized" });
    const token = authHeader.split(" ")[1];
    const user = jwt.verify(token, process.env.SECRET).user;
    if (!policies.includes(user.role.toUpperCase())) return res.status(403).send("Unauthorized");
    req.user = user;
    next();
  };

  applyCallbacks(callbacks) {
    return callbacks.map((callback) => async (...params) => {
      try {
        await callback.apply(this, params);
      } catch (error) {
        console.log(error);
        params[1].status(500).send(error);
      }
    });
  }
}
