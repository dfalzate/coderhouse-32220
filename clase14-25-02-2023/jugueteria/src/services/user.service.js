import bcrypt from "bcrypt";
import { UserModel } from "../models/user.model.js";

class UserService {
  async createUser(data) {
    try {
      data.password = bcrypt.hashSync(data.password, bcrypt.genSaltSync(10));
      const response = await UserModel.create(data);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getUser(email) {
    try {
      const response = await UserModel.findOne({ email });
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new UserService();
