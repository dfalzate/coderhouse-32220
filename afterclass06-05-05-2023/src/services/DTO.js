export class UserDTO {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    // this.password = user.password;
  }
}
export class ProductDTO {
  constructor(name, description, price, category) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
  }
}
