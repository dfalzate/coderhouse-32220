import { STATUS } from "../utils/constants.js";
import factory from "../services/factory.js";

class BusinessController {
  async create(req, res) {
    try {
      const data = req.body;
      const response = await factory.business.create(data);
      res.status(200).json({
        business: response,
        status: STATUS.SUCCESS,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
        status: STATUS.FAIL,
      });
    }
  }
  async getOne(req, res) {
    try {
      const { id } = req.params;
      const response = await factory.business.getOne(id);
      res.status(200).json({
        business: response,
        status: STATUS.SUCCESS,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
        status: STATUS.FAIL,
      });
    }
  }
  async getMany(req, res) {
    try {
      const response = await factory.business.getMany();
      res.status(200).json({
        businesses: response,
        status: STATUS.SUCCESS,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
        status: STATUS.FAIL,
      });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const response = await factory.business.update(id, data);
      res.status(200).json({
        business: response,
        status: STATUS.SUCCESS,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
        status: STATUS.FAIL,
      });
    }
  }
  async delete(req, res) {
    try {
    } catch (error) {
      res.status(400).json({
        message: error.message,
        status: STATUS.FAIL,
      });
    }
  }
}

export default new BusinessController();
