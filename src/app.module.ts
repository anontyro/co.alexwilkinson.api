import { AlanPartridgeModule } from './alan-partridge/alan-partridge.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModModule } from './auth-mod/auth-mod.module';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { GoogleIntegrationsModule } from './google-integrations/google-integrations.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AlanPartridgeModule,
    AuthModModule,
    UserModule,
    DatabaseModule,
    GoogleIntegrationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
