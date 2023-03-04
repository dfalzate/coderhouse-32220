import config from "../config/config.js";
import { PERSISTENCIA } from "../utils/constants.js";
import { UserRepository } from "./userDAOs/repository.js";
import { ProductRepository } from "./productDAOs/repository.js";
import { BusinessRepository } from "./businessDAOs/repository.js";

let factory;
switch (config.persistencia) {
  case PERSISTENCIA.MONGO:
    console.log("🧨 Persistencia Mongo");
    await import("../config/db.js");
    // eslint-disable-next-line no-case-declarations
    const { default: userMongo } = await import("./userDAOs/user.mongo.js");
    // eslint-disable-next-line no-case-declarations
    const { default: productMongo } = await import("./productDAOs/product.mongo.js");
    // eslint-disable-next-line no-case-declarations
    const { default: businessMongo } = await import("./businessDAOs/business.mongo.js");
    factory = {
      user: new UserRepository(userMongo),
      product: new ProductRepository(productMongo),
      business: new BusinessRepository(businessMongo),
    };
    break;
  case PERSISTENCIA.MYSQL:
    console.log("🧨 Persistencia Mysql");
    break;
  case PERSISTENCIA.FILE:
    console.log("🧨 Persistencia File");
    // eslint-disable-next-line no-case-declarations
    const { default: userFile } = await import("./userDAOs/user.file.js");
    factory = {
      user: new UserRepository(userFile),
    };
    break;
  case PERSISTENCIA.MEMORY:
    console.log("🧨 Persistencia Memory");
    break;
}

export default factory;
