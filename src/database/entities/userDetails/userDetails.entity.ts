import { UserUpdateDto } from 'src/user/models/dtos/user-update.dto';

export class UserDetailsEntity {
  constructor(userDetails: UserUpdateDto) {
    this.first_name = userDetails.firstName;
    this.last_name = userDetails.lastName;
  }

  first_name?: string;
  last_name?: string;
}
