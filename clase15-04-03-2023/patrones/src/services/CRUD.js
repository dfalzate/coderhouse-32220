export class CRUD {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async getOne(id) {
    try {
      const response = await this.model.findById(id);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async getMany() {
    try {
      const response = await this.model.find();
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async update(id, data) {
    try {
      const response = await this.getOne(id);
      Object.assign(response, data);
      response.save();
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async delete(id) {
    try {
      const response = await this.model.deleteOne(id);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
