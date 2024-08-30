import { AuthUser } from '@supabase/supabase-js';
import { ExtractJwt } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { SupabaseAuthStrategy } from './SupabaseStrategy/passport-supabase.strategy';

@Injectable()
export class SupabaseStrategy extends PassportStrategy(
  SupabaseAuthStrategy,
  'supabase',
) {
  public constructor() {
    super({
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_PUB_API_KEY,
      supabaseOptions: {},
      supabaseJwtSecret: process.env.SUPABASE_JWT,
      extractor: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: AuthUser): Promise<any> {
    super.validate(payload);
  }

  async authenticate(req: Request): Promise<void> {
    super.authenticate(req);
  }
}
