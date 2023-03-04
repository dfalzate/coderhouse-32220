import { UserModel } from "../models/user.model.js";
import bcrypt from "bcrypt";

export async function createUser(data) {
  try {
    const userExist = await getUser(data.email);
    if (userExist) {
      throw new Error("El usuario ya existe ");
    } else {
      data.password = bcrypt.hashSync(data.password, bcrypt.genSaltSync(10));
      const user = await UserModel.create(data);
      return user;
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getUser(email) {
  try {
    const user = await UserModel.find({ email }).lean();
    return user[0];
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateUser(email, data, updatePassword = false) {
  try {
    const user = await getUser(email);
    if (user) {
      if (data.password) {
        if (updatePassword) {
          data.password = bcrypt.hashSync(data.password, bcrypt.genSaltSync(10));
        } else {
          delete data.password;
        }
      }
      const user = await UserModel.findOneAndUpdate({ email }, { ...data }, { new: true });
      return user;
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
