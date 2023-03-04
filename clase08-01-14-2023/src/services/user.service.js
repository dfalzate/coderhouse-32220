import { UserModel } from "../models/user.models.js";

export async function getUser(idUsuario) {
  try {
    const user = await UserModel.findById(idUsuario);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getUsers() {
  try {
    const usuarios = await UserModel.find({ deletedAt: { $exists: false } });
    return usuarios;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function createUser(data) {
  try {
    const user = await UserModel.create(data);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}
export async function updateUser(idUsuario, data) {
  try {
    // await UserModel.updateOne({ _id: idUsuario }, data)
    // const user = getUser(idUsuario)
    const updatedUser = await UserModel.findByIdAndUpdate(idUsuario, data, { new: true });
    return updatedUser;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteUser(idUsuario) {
  try {
    await UserModel.delete({ _id: idUsuario });
  } catch (error) {
    throw new Error(error.message);
  }
}
