import { Injectable } from '@nestjs/common';
import { SignUpUserDto } from 'src/auth-mod/models/signUpUser.dto';
import { SupabaseService } from '../logic/supabase/supabase.service';

@Injectable()
export class AuthService {
  constructor(private readonly supabaseService: SupabaseService) {}

  public redirectUrl = '';

  signUp(userSignUp: SignUpUserDto) {
    return this.supabaseService.signUp(userSignUp.email, userSignUp.password);
  }

  signIn(userSignIn: SignUpUserDto) {
    return this.supabaseService.signIn(userSignIn.email, userSignIn.password);
  }

  async getGithubSignInUrl() {
    const url = await this.supabaseService.getGithubSignInUrl(this.redirectUrl);

    return url;
  }

  async handleOAuthCallback(token: string) {
    const data = await this.supabaseService.handleOAuthCallback(token);

    return data;
  }
}
