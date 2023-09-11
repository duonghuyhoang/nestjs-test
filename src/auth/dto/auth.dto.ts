import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsString, Length } from 'class-validator';
import { BaseDto } from 'src/common/base.dto';

export class RegisterDto extends BaseDto {
  @IsNotEmpty()
  @Expose()
  @IsString()
  username: string;

  @IsNotEmpty()
  @Length(7, 20)
  @Expose()
  password: string;
}

export class LoginDto extends BaseDto {
  @IsNotEmpty()
  @Expose()
  @IsString()
  username: string;

  @IsNotEmpty()
  @Length(7, 20)
  @Expose()
  password: string;
}
