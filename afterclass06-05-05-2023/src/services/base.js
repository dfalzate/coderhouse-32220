export class Base {
  constructor(model, DTO) {
    this.model = model;
    this.DTO = DTO;
  }

  async create(data) {
    const response = await this.model.create(data);
    const responseDTO = new this.DTO(response);
    return responseDTO;
  }
  async getOne(id) {
    const response = await this.model.findById(id);
    if (!response) throw new Error("No encontrado");
    const responseDTO = new this.DTO(response);
    return responseDTO;
  }
  async getMany() {
    const responses = await this.model.find({});
    const responseDTO = responses.map((response) => new this.DTO(response));
    return responseDTO;
  }
  async update(id, data) {
    const response = await this.getOne(id);
    Object(response, data);
    const responseDTO = new this.DTO(response);
    return responseDTO;
  }
  async delete(id) {
    await this.model.findByIdAndDelete(id);
    return "Borrado correctamente";
  }
}
