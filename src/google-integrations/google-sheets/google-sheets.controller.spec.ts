import { Test, TestingModule } from '@nestjs/testing';

import { GoogleSheetsController } from './google-sheets.controller';
import { GoogleSheetsService } from './services/google-sheets/google-sheets.service';

describe('GoogleSheetsController', () => {
  let controller: GoogleSheetsController;
  let googleSheetsService: GoogleSheetsService;

  beforeEach(async () => {
    const googleSheetsServiceMock = {
      getMovieSheetData: jest.fn().mockResolvedValue([]),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [GoogleSheetsController],
      providers: [
        {
          provide: GoogleSheetsService,
          useValue: googleSheetsServiceMock,
        },
      ],
    }).compile();

    controller = module.get<GoogleSheetsController>(GoogleSheetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
