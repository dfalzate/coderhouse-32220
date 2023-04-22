import { Module } from '@nestjs/common';
import { UsersMongoService } from './users-mongo.service';
import { UsersMongoController } from './users-mongo.controller';
import { User, UserSchema } from './schema/users.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
    ConfigModule,
  ],
  controllers: [UsersMongoController],
  providers: [UsersMongoService],
})
export class UsersMongoModule {}
