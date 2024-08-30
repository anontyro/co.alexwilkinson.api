import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { SupabaseClient } from '@supabase/supabase-js';
import { makeClient } from 'src/common/supabase/makeClient';

@Injectable()
export class RefreshTokenGuard implements CanActivate {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = makeClient();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const accessToken = req.headers['authorization']?.split(' ')[1];
    const refreshToken = req.headers['refresh-token'] as string;

    if (this.isTokenExpiring(accessToken)) {
      const { error, data } = await this.supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      });

      if (error) {
        throw new UnauthorizedException('Unable to update session');
      }

      req.headers['authorization'] = `Bearer ${data.session?.access_token}`;
      req.headers['refresh-token'] = data.session?.refresh_token;
    }

    return true;
  }

  private isTokenExpiring(accessToken: string): boolean {
    const payload = JSON.parse(
      Buffer.from(accessToken.split('.')[1], 'base64').toString(),
    );
    const exp = payload.exp * 1000;
    const now = Date.now();

    return exp - now < 5 * 60 * 1000;
  }
}
