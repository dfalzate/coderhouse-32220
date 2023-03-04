import ProductDTO from "./DTO.js";
export class ProductRepository {
  constructor(dao) {
    this.dao = dao;
  }

  async create(data) {
    const product = await this.dao.create(data);
    const productDTO = new ProductDTO(product);
    return productDTO;
  }

  async getOne(id) {
    const product = await this.dao.getOne(id);
    const productDTO = new ProductDTO(product);
    return productDTO;
  }

  async getMany() {
    const products = await this.dao.getMany();
    const productsDTO = products.map((product) => new ProductDTO(product));
    return productsDTO;
  }
  async update(id, data) {
    const product = await this.dao.update(id, data);
    const productDTO = new ProductDTO(product);
    return productDTO;
  }
  async delete(id) {
    const product = await this.dao.delete(id);
    const productDTO = new ProductDTO(product);
    return productDTO;
  }
}
