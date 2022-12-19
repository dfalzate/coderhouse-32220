import fs from "fs";

// const user = {
//   name: "User1",
//   email: "email1@email.com",
//   password: "password1",
// };

let users = [];

const NOMBRE_ARCHIVO = "users.json";

if (fs.existsSync(NOMBRE_ARCHIVO)) {
  try {
    users = JSON.parse(fs.readFileSync(NOMBRE_ARCHIVO, "utf-8"));
  } catch (error) {
    console.log(error);
  }
}

export function getUser(name) {
  try {
    const user = users.find((user) => user.name === name);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}

export function getUsers() {
  try {
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function createUser(user) {
  try {
    users.push(user);
    fs.writeFileSync(NOMBRE_ARCHIVO, JSON.stringify(users));
  } catch (error) {
    throw new Error(error.message);
  }
}

export function updateUser(name, data) {
  for (let user of users) {
    if (user.name === name) {
      user = Object.assign(user, data);
      fs.writeFileSync(NOMBRE_ARCHIVO, JSON.stringify(users));
      return user;
    }
  }
}

export function deleteUser() {}
