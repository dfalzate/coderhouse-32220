import { Base } from "./base.js";
import { ProductModel } from "../models/product.model.js";
import { ProductDTO } from "./DTO.js";
class ProductService extends Base {
  constructor(model, DTO) {
    super(model, DTO);
  }
}

export const productService = new ProductService(ProductModel, ProductDTO);
