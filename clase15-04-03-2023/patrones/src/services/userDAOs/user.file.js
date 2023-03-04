import bcrypt from "bcrypt";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
// import UserDTO from "./DTO.js";

class UserService {
  constructor() {
    if (fs.existsSync("usuarios.json")) {
      this.users = JSON.parse(fs.readFileSync("usuarios.json"));
    } else {
      this.users = [];
    }
  }

  async createUser(data) {
    try {
      const user = this.users.find((user) => user.email === data.email);
      if (user) throw new Error("El usuario ya existe");
      data.password = bcrypt.hashSync(data.password, bcrypt.genSaltSync(10));
      data.id = uuidv4();
      this.users.push(data);
      fs.writeFileSync("usuarios.json", JSON.stringify(this.users));
      // const userDTO = new UserDTO(data);
      // return userDTO;
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async getUser(email) {
    try {
      const user = this.users.find((user) => user.email === email);
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
