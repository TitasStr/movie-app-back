import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class AuthPayloadDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4, {
    message: 'Username must be between 4 and 20 characters long.',
  })
  @MaxLength(20, {
    message: 'Username must be between 4 and 20 characters long.',
  })
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8, {
    message: 'Password must be between 8 and 20 characters long.',
  })
  @MaxLength(20, {
    message: 'Password must be between 8 and 20 characters long.',
  })
  password: string;
}
