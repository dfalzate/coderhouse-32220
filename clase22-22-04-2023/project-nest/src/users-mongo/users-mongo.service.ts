import { Injectable } from '@nestjs/common';
import { CreateUsersMongoDto } from './dto/create-users-mongo.dto';
import { UpdateUsersMongoDto } from './dto/update-users-mongo.dto';
import { User, UserDocument } from './schema/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersMongoService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  create(createUsersMongoDto: CreateUsersMongoDto) {
    return this.userModel.create(createUsersMongoDto);
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: string) {
    return this.userModel.findById(id);
  }

  update(id: number, updateUsersMongoDto: UpdateUsersMongoDto) {
    return `This action updates a #${id} usersMongo`;
  }

  remove(id: number) {
    return this.userModel.deleteOne({ id });
  }
}
