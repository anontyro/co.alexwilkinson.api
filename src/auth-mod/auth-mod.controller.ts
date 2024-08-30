import { Response } from 'express';
import { AuthService } from './service/auth/auth.service';
import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Redirect,
  Res,
} from '@nestjs/common';
import { StandardResponseDto } from 'src/common/models/response/standardResp.dto';
import { SignUpUserDto } from './models/signUpUser.dto';

@Controller('auth')
export class AuthModController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signUp(@Body() signUp: SignUpUserDto) {
    return this.authService.signUp(signUp);
  }

  @Post('signin')
  signIn(@Body() signIn: SignUpUserDto) {
    return this.authService.signIn(signIn);
  }

  @Get('signin/github')
  @Redirect()
  async signInWithGithub(@Res() res: Response) {
    const url = await this.authService.getGithubSignInUrl();

    res.redirect(url);
  }

  @Get('callback')
  async handleOAuthCallback(@Query('access_token') accessToken: string) {
    try {
      const user = await this.authService.handleOAuthCallback(accessToken);

      const dto = new StandardResponseDto(user);

      return dto;
    } catch (err) {
      console.log(err.message);

      const errorDto = new StandardResponseDto(null, [err.message], false);
      return errorDto;
    }
  }
}
