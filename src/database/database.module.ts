import { Module } from '@nestjs/common';
import { ServiceService } from './service/service.service';
import { SupabaseDatabaseService } from './service/logic/supabase/supabase-database.service';
import { UserDbService } from './service/logic/supabase/user-db/user-db.service';

@Module({
  providers: [ServiceService, SupabaseDatabaseService, UserDbService],
  exports: [SupabaseDatabaseService],
})
export class DatabaseModule {}
