import { AlanPartridgeController } from './alan-partridge.controller';
import { Module } from '@nestjs/common';
import { AlanPartridgeService } from './services/alan-partridge/alan-partridge.service';

@Module({
  controllers: [AlanPartridgeController],
  providers: [AlanPartridgeService],
})
export class AlanPartridgeModule {}
