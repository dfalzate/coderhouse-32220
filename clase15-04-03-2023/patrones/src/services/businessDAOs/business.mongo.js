import { CRUD } from "../CRUD.js";
import { BusinessModel } from "../../models/business.model.js";

class ProductMongo extends CRUD {
  constructor(model) {
    super(model);
  }

  async getMany() {
    try {
      const response = await BusinessModel.find().populate("products");
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getOne(id) {
    try {
      const response = await BusinessModel.findById(id).populate("products");
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new ProductMongo(BusinessModel);
