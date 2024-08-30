import { AuthUser } from '@supabase/supabase-js';
import { Injectable } from '@nestjs/common';
import { SupabaseDatabaseService } from 'src/database/service/logic/supabase/supabase-database.service';
import { UserResponseDto } from 'src/user/models/dtos/user-response.dto';
import { UserUpdateDto } from 'src/user/models/dtos/user-update.dto';

@Injectable()
export class UserService {
  constructor(private readonly dbService: SupabaseDatabaseService) {}

  async getUserDetails(authUser: AuthUser): Promise<UserResponseDto> {
    const baseUser = new UserResponseDto(authUser.email);
    try {
      const user = await this.dbService.userDb.getUserDetails(
        authUser.email ?? '',
      );
      baseUser.firstName = user.first_name;
      baseUser.lastName = user.last_name;
      return baseUser;
    } catch (err) {
      return baseUser;
    }
  }

  async updateUserDetails(email: string, userUpdate: UserUpdateDto) {
    const updated = await this.dbService.userDb.updateUserDetails(
      email,
      userUpdate,
    );

    return updated;
  }
}
