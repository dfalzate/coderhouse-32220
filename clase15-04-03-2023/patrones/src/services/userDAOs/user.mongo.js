import bcrypt from "bcrypt";
import { UserModel } from "../../models/user.model.js";
// import UserDTO from "./DTO.js";

class UserService {
  async createUser(data) {
    try {
      data.password = bcrypt.hashSync(data.password, bcrypt.genSaltSync(10));
      const response = await UserModel.create(data);
      // const userDTO = new UserDTO(response);
      // return userDTO;
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getUser(email) {
    try {
      const user = await UserModel.findOne({ email });
      if (!user) throw new Error("El usuario no existe");
      // const userDTO = new UserDTO(user);
      // return userDTO;
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new UserService();
