import { userService } from "../services/user.service.js";
class UserController {
  async create(req, res) {
    try {
      const data = req.body;
      const response = await userService.create(data);
      res.status(201).json({ status: "success", user: response });
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
  async getOne(req, res) {
    try {
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
  async getMany(req, res) {
    try {
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
  async update(req, res) {
    try {
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
  async delete(req, res) {
    try {
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
}

export const userController = new UserController();
