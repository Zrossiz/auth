import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async save(user: Partial<User>) {
    return await this.prismaService.user.create({
      data: {
        email: user.email,
        password: user.password,
        roles: ['User'],
      },
    });
  }

  async findOne(idOrEmail: string) {
    return await this.prismaService.user.findFirst({
      where: {
        OR: [{ id: idOrEmail }, { email: idOrEmail }],
      },
    });
  }

  async delete(id: string) {
    return await this.prismaService.user.delete({
      where: { id },
    });
  }
}
