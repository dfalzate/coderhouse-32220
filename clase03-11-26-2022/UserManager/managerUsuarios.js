import fs from "fs";
import crypto from "crypto";

class UserManager {
  constructor() {
    this.usuarios = [];
    this.hash = crypto.createHash("md5");
  }

  async crearUsuario(usuario, password, nombre, apellido, edad, curso) {
    try {
      const newUsuario = {
        usuario,
        password: this.#encrypt(password),
        nombre,
        apellido,
        edad,
        curso,
      };
      if (fs.existsSync("Usuarios.json")) {
        this.#leerUsuarios();
        this.usuarios.push(newUsuario);
      } else {
        this.usuarios.push(newUsuario);
      }
      fs.promises.writeFile("Usuarios.json", JSON.stringify(this.usuarios));
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  async consultarUsuarios() {
    await this.#leerUsuarios();
    return this.usuarios;
  }

  async validarUsuario(usuario, password) {
    await this.#leerUsuarios();
    const user = this.usuarios.find((_usuario) => _usuario.usuario === usuario);
    if (user) {
      const _password = this.#encrypt(password);
      if (user.password === _password) {
        console.log(user);
        return user;
      } else {
        throw new Error("Password incorrecto");
      }
    }
    throw new Error("Usuario no encontrado");
  }

  async #leerUsuarios() {
    const usuarios = JSON.parse(await fs.promises.readFile("Usuarios.json", "utf-8"));
    this.usuarios = usuarios;
  }

  #encrypt(password) {
    return this.hash.update(password).digest("hex");
  }
}

const userManager = new UserManager();

// userManager.crearUsuario("Usuario1","Password","Nombre1", "Apellido1", 1, "Backend");
// console.log(await userManager.consultarUsuarios());
// await userManager.validarUsuario("Usuario1", "Password");
// await userManager.validarUsuario("Usuario1", "Password1");
await userManager.validarUsuario("Usuario2", "Password");
