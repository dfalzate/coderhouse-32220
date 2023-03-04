import BusinessDTO from "./DTO.js";
export class BusinessRepository {
  constructor(dao) {
    this.dao = dao;
  }

  async create(data) {
    const business = await this.dao.create(data);
    const businessDTO = new BusinessDTO(business);
    return businessDTO;
  }

  async getOne(id) {
    const business = await this.dao.getOne(id);
    const businessDTO = new BusinessDTO(business);
    return businessDTO;
  }

  async getMany() {
    const businesses = await this.dao.getMany();
    const businessesDTO = businesses.map((business) => new BusinessDTO(business));
    return businessesDTO;
  }

  async update(id, data) {
    const business = await this.dao.update(id, data);
    const businessDTO = new BusinessDTO(business);
    return businessDTO;
  }

  async delete(id) {
    const business = await this.dao.delete(id);
    const businessDTO = new BusinessDTO(business);
    return businessDTO;
  }
}
