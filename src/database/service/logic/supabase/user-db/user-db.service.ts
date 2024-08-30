import { Injectable } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { UserDetailsEntity } from 'src/database/entities/userDetails/userDetails.entity';
import { UserUpdateDto } from 'src/user/models/dtos/user-update.dto';
import { makeClient } from 'src/common/supabase/makeClient';

const USER_DETAILS_TABLE = 'user_details';

@Injectable()
export class UserDbService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = makeClient(process.env.SUPABASE_SERVICE_ROLE);
  }

  async getUserDetails(email: string): Promise<any> {
    const { data, error } = await this.supabase
      .from(USER_DETAILS_TABLE)
      .select('*')
      .eq('email', email)
      .single();

    if (error) {
      throw new Error(`Failed to fetch user: ${error.message}`);
    }

    return data;
  }

  async updateUserDetails(email: string, userDetails: UserUpdateDto) {
    const userEntity = new UserDetailsEntity(userDetails);
    const { data: existingUser, error: fetchError } = await this.supabase
      .from('user_details')
      .select('*')
      .eq('email', email)
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') {
      // Handle unexpected errors (ignore error code related to no results if not relevant)
      throw new Error(`Failed to fetch user: ${fetchError.message}`);
    }

    if (existingUser) {
      // User exists, update their details
      const { data, error: updateError } = await this.supabase
        .from('user_details')
        .update(userEntity)
        .eq('email', email)
        .single();

      if (updateError) {
        throw new Error(`Failed to update user: ${updateError.message}`);
      }

      return true;
    }

    // User does not exist, create a new user
    const { data, error: insertError } = await this.supabase
      .from('user_details')
      .insert({ email, ...userEntity })
      .single();

    if (insertError) {
      throw new Error(`Failed to create user: ${insertError.message}`);
    }

    return true;
  }
}
