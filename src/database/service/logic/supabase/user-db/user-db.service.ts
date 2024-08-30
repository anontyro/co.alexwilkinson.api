import { Injectable } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { makeClient } from 'src/common/supabase/makeClient';

const USER_DETAILS_TABLE = 'user_details';

@Injectable()
export class UserDbService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = makeClient();
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
}
