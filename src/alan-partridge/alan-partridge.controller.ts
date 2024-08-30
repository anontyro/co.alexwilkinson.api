import { Controller, Get } from '@nestjs/common';

import { AlanPartridgeService } from './services/alan-partridge/alan-partridge.service';
import { StandardResponseDto } from 'src/common/models/response/standardResp.dto';

@Controller('alan-partridge')
export class AlanPartridgeController {
  constructor(private readonly alanPartridgeService: AlanPartridgeService) {}

  @Get()
  async getRandomQuote() {
    const quote = await this.alanPartridgeService.getNewQuote();

    const dto = new StandardResponseDto(quote);

    return dto;
  }
}
