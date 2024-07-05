import { Test, TestingModule } from '@nestjs/testing';
import { AlanPartridgeService } from './alan-partridge.service';

describe('AlanPartridgeService', () => {
  let service: AlanPartridgeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlanPartridgeService],
    }).compile();

    service = module.get<AlanPartridgeService>(AlanPartridgeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
