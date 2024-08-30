export class StandardResponseDto<T = any> {
  data: T;
  errors: string[];
  success: boolean;

  constructor(data: T, errors: string[] = [], success: boolean = true) {
    this.data = data;
    this.errors = errors;
    this.success = success;
  }
}
