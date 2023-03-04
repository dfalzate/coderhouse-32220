import UserDTO from "./DTO.js";
export class UserRepository {
  constructor(dao) {
    this.dao = dao;
  }

  async createUser(data) {
    const user = await this.dao.createUser(data);
    const userDTO = new UserDTO(user);
    return userDTO;
  }

  async getUser(email) {
    const user = await this.dao.getUser(email);
    const userDTO = new UserDTO(user);
    return userDTO;
  }
}
