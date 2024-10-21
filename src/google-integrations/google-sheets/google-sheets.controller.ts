import { Controller, Get } from '@nestjs/common';

import { GoogleSheetsService } from './services/google-sheets/google-sheets.service';

@Controller('google-sheets')
export class GoogleSheetsController {
  constructor(private readonly googleSheetsService: GoogleSheetsService) {}

  @Get('movie-guessing-sheet')
  async getMovieGussingSheet() {
    const results = await this.googleSheetsService.getMovieSheetData();
    return results;
  }
}
