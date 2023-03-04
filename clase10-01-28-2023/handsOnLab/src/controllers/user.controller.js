import * as UserService from "../services/user.service.js";

export async function createUser(req, res) {
  try {
    const data = req.body;
    const response = await UserService.createUser(data);
    res.status(201).json({ user: response });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function getUser(req, res) {
  try {
    const { email } = req.params;
    const user = await UserService.getUser(email);
    if (user) {
      delete user.password;
      res.json({ user });
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
