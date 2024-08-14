import { Controller, Post, Body, Get } from '@nestjs/common';
// Service
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async registerUser(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string
  ) {
    return this.userService.createUser(name, email, password);
  }

  @Post('login')
  async loginUser(
    @Body('email') email: string,
    @Body('password') password: string
  ) {
    return this.userService.getUser(email, password);
  }

  @Get('all')
  async getAllUsers() {
    console.log('get');
    return this.userService.getAllUsers();
  }
}
