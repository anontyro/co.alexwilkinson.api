import { AlanPartridgeModule } from './alan-partridge/alan-partridge.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModModule } from './auth-mod/auth-mod.module';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AlanPartridgeModule,
    AuthModModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
