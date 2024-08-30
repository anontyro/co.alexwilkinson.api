import { Test, TestingModule } from '@nestjs/testing';
import { AuthModController } from './auth-mod.controller';

describe('AuthModController', () => {
  let controller: AuthModController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthModController],
    }).compile();

    controller = module.get<AuthModController>(AuthModController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
