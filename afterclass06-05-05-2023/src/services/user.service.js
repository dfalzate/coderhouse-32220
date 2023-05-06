import { Base } from "./base.js";
import { UserModel } from "../models/user.model.js";
import { UserDTO } from "./DTO.js";
import bcrypt from "bcrypt";
class UserService extends Base {
  constructor(model, DTO) {
    super(model, DTO);
  }

  async create(data) {
    data.password = bcrypt.hashSync(data.password, bcrypt.genSaltSync(10));
    const response = await UserModel.create(data);
    return new UserDTO(response);
  }

  async getFullUser(id) {
    return await UserModel.findById(id);
  }
}

export const userService = new UserService(UserModel, UserDTO);
