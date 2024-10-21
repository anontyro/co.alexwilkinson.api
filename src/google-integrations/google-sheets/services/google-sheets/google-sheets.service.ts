import { Injectable } from '@nestjs/common';
import { MovieGuessingService } from '../movie-guessing/movie-guessing/movie-guessing.service';

@Injectable()
export class GoogleSheetsService {
  private SheetApiKey = '';
  constructor(private readonly movieGuessingService: MovieGuessingService) {
    this.SheetApiKey = process.env.GOOGLE_SHEETS_API_KEY ?? '';
  }

  async getMovieSheetData() {
    const data = await this.movieGuessingService.getMovieSheetData(
      this.SheetApiKey,
    );
    return data;
  }
}
