import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersMongoService } from './users-mongo.service';
import { CreateUsersMongoDto } from './dto/create-users-mongo.dto';
import { UpdateUsersMongoDto } from './dto/update-users-mongo.dto';
import { ConfigService } from '@nestjs/config';

@Controller('users-mongo')
export class UsersMongoController {
  constructor(
    private readonly usersMongoService: UsersMongoService,
    private config: ConfigService,
  ) {}

  @Post()
  create(@Body() createUsersMongoDto: CreateUsersMongoDto) {
    return this.usersMongoService.create(createUsersMongoDto);
  }

  @Get()
  findAll() {
    console.log(this.config.get<string>('MONGO_URI'));
    return this.usersMongoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersMongoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUsersMongoDto: UpdateUsersMongoDto,
  ) {
    return this.usersMongoService.update(+id, updateUsersMongoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersMongoService.remove(+id);
  }
}
