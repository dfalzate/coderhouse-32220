import * as UserService from "../services/user.service.js";
import { STATUS } from "../constants/constants.js";

export async function getUser(req, res) {
  try {
    const { idUsuario } = req.params;
    const response = await UserService.getUser(idUsuario);
    res.json({
      user: response,
      status: STATUS.SUCCESS,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      status: STATUS.FAIL,
    });
  }
}

export async function getUsers(req, res) {
  try {
    const response = await UserService.getUsers();
    res.json({
      users: response,
      status: STATUS.SUCCESS,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      status: STATUS.FAIL,
    });
  }
}

export async function createUser(req, res) {
  try {
    const { body } = req;
    const response = await UserService.createUser(body);
    res.status(201).json({
      user: response,
      status: STATUS.SUCCESS,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      status: STATUS.FAIL,
    });
  }
}
export async function updateUser(req, res) {
  try {
    const { idUsuario } = req.params;
    const { body } = req;
    const response = await UserService.updateUser(idUsuario, body);
    res.status(201).json({
      user: response,
      status: STATUS.SUCCESS,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      status: STATUS.FAIL,
    });
  }
}
export async function deleteUser(req, res) {
  try {
    const { idUsuario } = req.params;
    await UserService.deleteUser(idUsuario);
    res.status(201).json({
      message: "Usuario borrado correctamente",
      status: STATUS.SUCCESS,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      status: STATUS.FAIL,
    });
  }
}
