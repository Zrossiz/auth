import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('')
  createUser(@Body() dto) {
    return this.userService.save(dto);
  }

  @Get(':idOrEmail')
  findOneUser(@Param() idOrEmail: string) {
    return this.userService.findOne(idOrEmail);
  }

  @Delete(':id')
  delete(@Param() id: string) {
    return this.userService.delete(id);
  }
}
