import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsString, Length } from 'class-validator';
import { BaseDto } from 'src/common/base.dto';

export class UserDto extends BaseDto {
  @IsNotEmpty()
  @Expose()
  username: string;

  @Length(7, 20)
  @Expose()
  password: string;
}
