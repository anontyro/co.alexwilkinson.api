import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { GoogleSheetObject } from '../../../types/GoogleSheetObject';
import { Movie } from 'src/google-integrations/google-sheets/entities/movie.entity';
import { mapSheetToEntity } from 'src/google-integrations/google-sheets/utils/movieGuessing/mapSheetToEntity';

const GOOGLE_SHEET_URL = `https://sheets.googleapis.com/v4/spreadsheets`;

@Injectable()
export class MovieGuessingService {
  private SheetId = '';
  constructor() {
    this.SheetId = process.env.GOOGLE_SHEET_MOVIE_ID ?? '';
  }

  private async getMovieSheet(apiKey: string) {
    try {
      const sheetRange = 'Sheet1';
      const url = `${GOOGLE_SHEET_URL}/${this.SheetId}/values/${sheetRange}?key=${apiKey}`;

      const response = await fetch(url);

      const data = (await response.json()) as GoogleSheetObject;

      return data;
    } catch (err) {
      console.error('unable to get data for google sheet movie', err);
    }
  }

  async getMovieSheetData(apiKey: string): Promise<Movie[]> {
    if (!apiKey || !this.SheetId) {
      throw new NotFoundException(
        'Unable to find keys required for request of Google Sheet Movie',
      );
    }

    const sheetData = await this.getMovieSheet(apiKey);

    if (!sheetData) {
      throw new BadRequestException('Unable to get sheet data');
    }

    const processedEntities = mapSheetToEntity(sheetData);

    return processedEntities;
  }
}
