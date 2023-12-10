import { Injectable, Logger } from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto';
import { UserService } from 'src/user/user.service';
import { Tokens } from './interafaces';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  constructor(private readonly userService: UserService) {}

  async register(dto: RegisterDto) {
    return this.userService.save(dto).catch((err) => {
      this.logger.error(err);
      return null;
    });
  }

  async login(dto: LoginDto): Promise<Tokens> {
    const user = await this.userService.findOne(dto.email).catch((err) => {
      this.logger.error(err);
      return null;
    });
    return;
  }
}
