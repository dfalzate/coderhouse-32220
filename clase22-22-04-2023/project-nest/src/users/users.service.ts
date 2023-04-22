import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UsersService {
  private users: Array<User>;

  constructor() {
    this.users = [];
  }

  create(createUser: User) {
    createUser.id = uuid();
    this.users.push(createUser);
    return { status: 'success', user: createUser };
  }

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
