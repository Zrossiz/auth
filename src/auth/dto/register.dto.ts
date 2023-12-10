import { IsPasswordMatchingConstraint } from '@app/common/decorators/is-passwords-matching-constraint';
import { IsEmail, IsString, MinLength, Validate } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @MinLength(6)
  @Validate(IsPasswordMatchingConstraint)
  passwordRepeat: string;
}
