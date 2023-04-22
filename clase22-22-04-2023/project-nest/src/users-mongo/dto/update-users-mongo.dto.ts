import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersMongoDto } from './create-users-mongo.dto';

export class UpdateUsersMongoDto extends PartialType(CreateUsersMongoDto) {}
