import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlanPartridgeModule } from './alan-partridge/alan-partridge.module';

@Module({
  imports: [AlanPartridgeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
