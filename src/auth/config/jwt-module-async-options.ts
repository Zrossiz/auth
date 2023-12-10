import { JwtModuleAsyncOptions } from '@nestjs/jwt';

export const options = (): JwtModuleAsyncOptions => ({
  inject: [],
  useFactory: () => {},
});
