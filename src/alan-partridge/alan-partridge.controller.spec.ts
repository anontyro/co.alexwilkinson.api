import { Test, TestingModule } from '@nestjs/testing';
import { AlanPartridgeController } from './alan-partridge.controller';

describe('AlanPartridgeController', () => {
  let controller: AlanPartridgeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlanPartridgeController],
    }).compile();

    controller = module.get<AlanPartridgeController>(AlanPartridgeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
