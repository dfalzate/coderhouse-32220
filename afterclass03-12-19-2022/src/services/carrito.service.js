import fs from "fs";
import { uuid } from "uuidv4";
import * as UserService from "../services/users.service.js";
import * as ProductService from "../services/products.service.js";

// const carrito = {
//   id: uuid(),
//   user: "User1",
//   productos: [
//     {
//       id: uuid(),
//       nombre: "Producto1",
//       precio: 1,
//       cantidad: 100,
//     },
//   ],
// };

let carrito = [];

const NOMBRE_ARCHIVO = "carrito.json";

if (fs.existsSync(NOMBRE_ARCHIVO)) {
  try {
    carrito = JSON.parse(fs.readFileSync(NOMBRE_ARCHIVO, "utf-8"));
  } catch (error) {
    console.log(error);
  }
}

function createCarrito(user) {
  try {
    const _user = UserService.getUser(user);
    if (!_user) throw new Error("No existe el usuario");
    const carrito = {
      id: uuid(),
      user: _user.name,
      productos: [],
    };
    return carrito;
  } catch (error) {
    console.log(error);
  }
}

function addProductToCarrito(idProducto, idCarrito) {}
