import * as UserService from "./user.service.js";

export async function createInvoice(idUsuario, data) {
  const user = await UserService.getUser(idUsuario);
}
