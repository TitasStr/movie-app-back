import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthPayloadDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    authDto: AuthPayloadDto,
  ): Promise<{ accessToken: string }> {
    console.log(authDto);
    const user = await this.userService.findUser(authDto);
    if (!user) return null;
    const payload = {
      id: user.id,
      username: user.username,
    };
    const token = this.jwtService.sign(payload);
    return { accessToken: token };
  }

  async registerUser(
    registerUserDto: AuthPayloadDto,
  ): Promise<{ message: string }> {
    return await this.userService.createUser(registerUserDto);
  }
}
