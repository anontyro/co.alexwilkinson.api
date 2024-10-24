import { Test, TestingModule } from '@nestjs/testing';

import { GoogleSheetsService } from './google-sheets.service';
import { MovieGuessingService } from '../movie-guessing/movie-guessing/movie-guessing.service';

describe('GoogleSheetsService', () => {
  let service: GoogleSheetsService;
  let movieGuessingService: MovieGuessingService;

  beforeEach(async () => {
    const movieGuessingServiceMock = {
      getMovieSheetData: jest.fn().mockResolvedValue([]), // Mock a return value
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GoogleSheetsService,
        {
          provide: MovieGuessingService,
          useValue: movieGuessingServiceMock,
        },
      ],
    }).compile();

    service = module.get<GoogleSheetsService>(GoogleSheetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it.skip('should call getMovieSheetData with the API key', async () => {
    const apiKey = 'test_api_key';
    process.env.GOOGLE_SHEETS_API_KEY = apiKey;

    await service.getMovieSheetData();

    expect(movieGuessingService.getMovieSheetData).toHaveBeenCalledWith(apiKey);
  });
});
