import fs from "fs";

class UserManager {
  constructor() {
    this.usuarios = [];
  }

  async crearUsuario(nombre, apellido, edad, curso) {
    try {
      const usuario = {
        nombre,
        apellido,
        edad,
        curso,
      };
      if (fs.existsSync("Usuarios.json")) {
        this.#leerUsuarios();
        this.usuarios.push(usuario);
      } else {
        this.usuarios.push(usuario);
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

  async #leerUsuarios() {
    const usuarios = JSON.parse(await fs.promises.readFile("Usuarios.json", "utf-8"));
    this.usuarios = usuarios;
  }
}

const userManager = new UserManager();

// userManager.crearUsuario("Usuario1", "Apellido1", 1, "Backend");
console.log(await userManager.consultarUsuarios());
