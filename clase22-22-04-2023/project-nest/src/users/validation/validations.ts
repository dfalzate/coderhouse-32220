import * as Joi from 'joi';
import { User } from '../entities/user.entity';
import { HttpException, HttpStatus } from '@nestjs/common';

const userSchema = Joi.object({
  id: Joi.string(),
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  avatar: Joi.string(),
});

export function validateCreateUser(user: User) {
  const response = userSchema.validate(user);
  if (response.error) {
    throw new HttpException(response.error, HttpStatus.BAD_REQUEST);
  }
}
