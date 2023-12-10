import { Token } from '@prisma/client';

export interface Tokens {
  acccessToken: string;
  refreshToken: Token;
}
