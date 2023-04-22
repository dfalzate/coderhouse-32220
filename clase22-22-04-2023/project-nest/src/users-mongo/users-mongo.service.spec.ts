import { Test, TestingModule } from '@nestjs/testing';
import { UsersMongoService } from './users-mongo.service';

describe('UsersMongoService', () => {
  let service: UsersMongoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersMongoService],
    }).compile();

    service = module.get<UsersMongoService>(UsersMongoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
