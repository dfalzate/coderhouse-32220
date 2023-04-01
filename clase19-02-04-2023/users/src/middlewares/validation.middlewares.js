import Joi from "joi";

const createUserValidationSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(0).required(),
  password: Joi.string().min(6).required(),
});

export function createUserValidation(req, res, next) {
  try {
    const data = req.body;
    const response = createUserValidationSchema.validate(data);
    if (response.error) return res.status(400).send(response.error);
    next();
  } catch (error) {
    throw new Error(error.message);
  }
}
