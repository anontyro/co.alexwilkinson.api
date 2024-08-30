import { AuthModController } from './auth-mod.controller';
import { AuthService } from './service/auth/auth.service';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { SupabaseService } from './service/logic/supabase/supabase.service';
import { SupabaseStrategy } from './strategies/supabase.strategy';

@Module({
  imports: [PassportModule],
  providers: [AuthService, SupabaseService, SupabaseStrategy],
  exports: [AuthService, SupabaseStrategy],
  controllers: [AuthModController],
})
export class AuthModModule {}
