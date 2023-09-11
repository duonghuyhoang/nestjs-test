import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Delete,
  UsePipes,
  ValidationPipe,
  Query,
} from '@nestjs/common';
import { UserDto } from './dtos/user.dto';
import { UserService } from './user.service';
import { UpdateResult } from 'typeorm';
import { Users } from './entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get()
  async getAllUsers(@Query('page', ParseIntPipe) page: number) {
    return await this.UserService.findAll(page);
  }
  @Post()
  async save(@Body() user: UserDto): Promise<UserDto> {
    return await this.UserService.save(user);
  }
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() user: UserDto,
  ): Promise<UpdateResult> {
    return await this.UserService.update(id, user);
  }
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.UserService.delete(id);
  }
  @Get(':id')
  async getUserById(@Param('id', ParseIntPipe) id: number): Promise<Users> {
    return await this.UserService.getUserById(id);
  }
}
