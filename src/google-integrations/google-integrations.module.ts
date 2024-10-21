import { GoogleSheetsController } from './google-sheets/google-sheets.controller';
import { Module } from '@nestjs/common';
import { GoogleSheetsService } from './google-sheets/services/google-sheets/google-sheets.service';
import { MovieGuessingService } from './google-sheets/services/movie-guessing/movie-guessing/movie-guessing.service';

@Module({
  controllers: [GoogleSheetsController],
  providers: [GoogleSheetsService, MovieGuessingService],
})
export class GoogleIntegrationsModule {}
