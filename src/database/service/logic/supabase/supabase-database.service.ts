import { Injectable } from '@nestjs/common';
import { UserDbService } from './user-db/user-db.service';

@Injectable()
export class SupabaseDatabaseService {
  constructor(public readonly userDb: UserDbService) {}
}
