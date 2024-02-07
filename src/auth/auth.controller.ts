import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  @UsePipes(ValidationPipe)
  async login(@Body() loginUserDto: AuthPayloadDto) {
    return await this.authService.validateUser(loginUserDto);
  }

  @Post('/register')
  @UsePipes(ValidationPipe)
  async register(@Body() registerUserDto: AuthPayloadDto) {
    return await this.authService.registerUser(registerUserDto);
  }

  @Get('/status')
  @UseGuards(JwtAuthGuard)
  async status(@Req() req) {
    return { username: req.user.username };
  }
}
