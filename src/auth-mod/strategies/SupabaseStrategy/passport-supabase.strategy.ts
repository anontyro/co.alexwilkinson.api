import {
  AuthUser,
  SupabaseClient,
  SupabaseClientOptions,
  createClient,
} from '@supabase/supabase-js';

import { JwtFromRequestFunction } from 'passport-jwt';
import { Strategy } from 'passport-strategy';
import { UnauthorizedException } from '@nestjs/common';

export interface SupabaseAuthStrategyOptions {
  supabaseUrl: string;
  supabaseKey: string;
  supabaseOptions: SupabaseClientOptions<'public'>;
  extractor: JwtFromRequestFunction;
}

export class SupabaseAuthStrategy extends Strategy {
  readonly name = 'SUPABASE_AUTH';
  private supabase: SupabaseClient;
  private extractor: JwtFromRequestFunction;
  success: (user: any, info: any) => void;
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  fail: Strategy['fail'];

  constructor(options: SupabaseAuthStrategyOptions) {
    super();

    if (!options.extractor) {
      throw new Error(
        '\n Extractor is not a function. You should provide an extractor.',
      );
    }

    this.supabase = createClient(
      options.supabaseUrl,
      options.supabaseKey,
      (options.supabaseOptions = {}),
    );
    this.extractor = options.extractor;
  }

  async validate(payload: AuthUser): Promise<AuthUser | null> {
    if (!!payload) {
      this.success(payload, {});

      return payload;
    }

    this.fail('UNAUTHORIZED', 401);

    return null;
  }

  async authenticate(req: any): Promise<void> {
    try {
      const idToken = this.extractor(req);

      if (!idToken) {
        this.fail('UNAUTHORIZED', 401);
        return;
      }

      const { data, error } = await this.supabase.auth.getUser(idToken);

      if (error) {
        throw new UnauthorizedException();
      }

      this.validate(data?.user as any);
    } catch (err) {
      this.fail(err.message, 401);
    }
  }
}
