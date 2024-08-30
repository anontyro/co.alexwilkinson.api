import { AuthModController } from './auth-mod.controller';
import { AuthService } from './service/auth/auth.service';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { RefreshTokenGuard } from './guards/refresh-token.guard';
import { SupabaseAuthGuard } from './guards/supabase-auth-guard';
import { SupabaseAuthService } from './service/logic/supabase/supabase-auth.service';
import { SupabaseStrategy } from './strategies/supabase.strategy';

@Module({
  imports: [PassportModule],
  providers: [
    AuthService,
    SupabaseAuthService,
    SupabaseStrategy,
    RefreshTokenGuard,
    SupabaseAuthGuard,
  ],
  exports: [
    AuthService,
    SupabaseStrategy,
    RefreshTokenGuard,
    SupabaseAuthGuard,
  ],
  controllers: [AuthModController],
})
export class AuthModModule {}
