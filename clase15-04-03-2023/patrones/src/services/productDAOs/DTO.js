export default class UserDTO {
  constructor(product) {
    this.identificacion = product._id;
    this.name = product.name;
    this.description = product.description;
    this.price = product.price;
    this.quantity = product.quantity;
  }
}
