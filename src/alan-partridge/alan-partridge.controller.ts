import { Controller, Get } from '@nestjs/common';

import { AlanPartridgeService } from './services/alan-partridge/alan-partridge.service';

@Controller('alan-partridge')
export class AlanPartridgeController {
  constructor(private readonly alanPartridgeService: AlanPartridgeService) {}

  @Get()
  async getRandomQuote() {
    const quote = await this.alanPartridgeService.getNewQuote();

    return {
      data: quote,
      success: true,
    };
  }
}
