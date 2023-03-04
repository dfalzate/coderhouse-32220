// import userService from "../services/user.service.js";
// import userService from "../services/userDAOs/user.mongo.js";
// import userService from "../services/userDAOs/user.file.js";
import factory from "../services/factory.js";
import { STATUS } from "../utils/constants.js";

class UserController {
  async createUser(req, res) {
    try {
      const data = req.body;
      const response = await factory.user.createUser(data);
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
      const { email } = req.params;
      const response = await factory.user.getUser(email);
      res.status(200).json({ user: response, status: STATUS.SUCCESS });
    } catch (error) {
      res.status(400).json({
        error: error.message,
        status: STATUS.FAIL,
      });
    }
  }
}

export default new UserController();
