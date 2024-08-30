import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { UserService } from './service/user/user.service';
import { StandardResponseDto } from 'src/common/models/response/standardResp.dto';
import { RefreshTokenGuard } from 'src/auth-mod/guards/refresh-token.guard';
import { SupabaseAuthGuard } from 'src/auth-mod/guards/supabase-auth-guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(RefreshTokenGuard, SupabaseAuthGuard)
  @Get('details')
  async userDetails(@Request() req: any) {
    const output = new StandardResponseDto({});
    return output;
  }
}
