class User {
  constructor() {
    this.users = [];
  }

  getUsers() {
    return this.users;
  }

  addUser(user) {
    this.users.push(user);
  }
}

export default new User();
