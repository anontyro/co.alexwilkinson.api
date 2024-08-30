import { Injectable } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { makeClient } from 'src/common/supabase/makeClient';

@Injectable()
export class SupabaseAuthService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = makeClient();
  }

  async signUp(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  async signIn(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log(error);
      throw new Error(error.message);
    }

    return data;
  }

  async getGithubSignInUrl(redirectTo: string): Promise<string> {
    const { data } = await this.supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo,
      },
    });

    return data.url ?? '';
  }

  async handleOAuthCallback(accesstoken: string) {
    const { data, error } = await this.supabase.auth.getUser(accesstoken);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }
}
