import * as AuthService from "../services/auth.service.js";

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const logged = await AuthService.login(email, password);
    if (logged) {
      req.session.logged = true;
      res.send("Usuario registrado");
    } else {
      res.status(400).send("Usuario o clave no valida");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function logout(req, res) {
  try {
    req.session.destroy((err) => {
      if (err) {
        res.json(err);
      } else {
        res.send("Salio de la aplicación");
      }
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
}
