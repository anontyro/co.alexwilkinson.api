export class UserResponseDto {
  constructor(email?: string) {
    this.email = email ?? '';
  }

  email: string;
  firstName?: string;
  lastName?: string;
}
