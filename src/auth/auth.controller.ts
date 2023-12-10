import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('register')
  register(@Body() dto) {}

  @Post('login')
  login(@Body() dto) {}

  @Get('refresh')
  refreshToken() {}
}
