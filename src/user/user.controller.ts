import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './service/user/user.service';
import { StandardResponseDto } from 'src/common/models/response/standardResp.dto';
import { RefreshTokenGuard } from 'src/auth-mod/guards/refresh-token.guard';
import { SupabaseAuthGuard } from 'src/auth-mod/guards/supabase-auth-guard';
import { CurrentUser } from 'src/auth-mod/decorators/user.decorator';
import { AuthUser } from '@supabase/supabase-js';
import { UserUpdateDto } from './models/dtos/user-update.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(RefreshTokenGuard, SupabaseAuthGuard)
  @Get('details')
  async userDetails(@Request() req: any, @CurrentUser() currentUser: AuthUser) {
    const user = await this.userService.getUserDetails(currentUser);
    const output = new StandardResponseDto({ user });
    return output;
  }

  @UseGuards(RefreshTokenGuard, SupabaseAuthGuard)
  @Post()
  async updateUserDetails(
    @Body() userUpdate: UserUpdateDto,
    @CurrentUser() currentUser: AuthUser,
  ) {
    const output = new StandardResponseDto({});

    await this.userService.updateUserDetails(
      currentUser.email ?? '',
      userUpdate,
    );

    return output;
  }
}
