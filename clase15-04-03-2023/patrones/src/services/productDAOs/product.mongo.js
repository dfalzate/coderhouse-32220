import { CRUD } from "../CRUD.js";
import { ProductModel } from "../../models/product.model.js";

class ProductMongo extends CRUD {
  constructor(model) {
    super(model);
  }
}

export default new ProductMongo(ProductModel);
