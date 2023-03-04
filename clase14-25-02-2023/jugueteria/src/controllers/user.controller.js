import userService from "../services/user.service.js";
import { STATUS } from "../utils/constants.js";

class UserController {
  async createUser(req, res) {
    try {
      const data = req.body;
      const response = await userService.createUser(data);
      res.status(201).json({ user: response, status: STATUS.SUCCESS });
    } catch (error) {
      res.status(400).json({
        error: error.message,
        status: STATUS.FAIL,
      });
    }
  }

  async getUser(req, res) {
    try {
      const { email } = req.body;
      const response = await userService.getUser(email);
      res.status(201).json({ user: response, status: STATUS.SUCCESS });
    } catch (error) {
      res.status(400).json({
        error: error.message,
        status: STATUS.FAIL,
      });
    }
  }
}

export default new UserController();
