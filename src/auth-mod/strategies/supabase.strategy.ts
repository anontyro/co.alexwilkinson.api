import { SupabaseAuthStrategy, SupabaseAuthUser } from 'nestjs-supabase-auth';

import { ExtractJwt } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';

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

  async validate(payload: SupabaseAuthUser): Promise<any> {
    super.validate(payload);
  }

  authenticate(req: Request): void {
    super.authenticate(req);
  }
}
