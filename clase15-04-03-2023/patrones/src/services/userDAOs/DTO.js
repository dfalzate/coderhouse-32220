export default class UserDTO {
  constructor(user) {
    this.id = user._id || user.id;
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
  }
}
