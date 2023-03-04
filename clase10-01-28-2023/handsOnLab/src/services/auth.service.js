import * as UserService from "../services/user.service.js";

export async function login(email, password) {
  try {
    const user = await UserService.getUser(email);
    if (!user) {
      throw new Error("El usuario no existe");
    } else {
      if (password === user.password) {
        return true;
      } else {
        return false;
      }
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
