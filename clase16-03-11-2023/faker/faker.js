import { faker } from "@faker-js/faker";
faker.locale = "es";

function generateUser() {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: {
      street: faker.address.street(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    },
    role: faker.helpers.arrayElement(['cliente', 'vendedor']),
    premium: faker.datatype.boolean(),
    currentJob:faker.name.jobTitle()
  };
}

// const users = [];
// for (let i = 0; i < 100; i++) {
//   users.push(generateUser());
// }

console.log(generateUser())

function generateProduct() {
  return {
    id: faker.database.mongodbObjectId(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    image: faker.image.image(),
    category: faker.commerce.department(),
    code: faker.random.alphaNumeric(8)
  };
}

console.log(generateProduct())