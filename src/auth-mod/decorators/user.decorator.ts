import { ExecutionContext, createParamDecorator } from '@nestjs/common';

import { AuthUser } from '@supabase/supabase-js';

export const CurrentUser = createParamDecorator<
  unknown,
  ExecutionContext,
  AuthUser
>((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});
