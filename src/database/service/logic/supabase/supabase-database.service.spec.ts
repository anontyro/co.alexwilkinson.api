import { Test, TestingModule } from '@nestjs/testing';

import { SupabaseDatabaseService } from './supabase-database.service';

describe('SupabaseService', () => {
  let service: SupabaseDatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupabaseDatabaseService],
    }).compile();

    service = module.get<SupabaseDatabaseService>(SupabaseDatabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
