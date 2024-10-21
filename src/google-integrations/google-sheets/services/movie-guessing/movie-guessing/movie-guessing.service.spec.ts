import { Test, TestingModule } from '@nestjs/testing';
import { MovieGuessingService } from './movie-guessing.service';

describe('MovieGuessingService', () => {
  let service: MovieGuessingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieGuessingService],
    }).compile();

    service = module.get<MovieGuessingService>(MovieGuessingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
