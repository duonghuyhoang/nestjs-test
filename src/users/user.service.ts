import { UserDto } from './dtos/user.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';
import { plainToClass } from 'class-transformer';
import { UpdateResult } from 'typeorm';
const limit = 4;

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private repo: Repository<Users>,
  ) {}

  async findAll(page: number): Promise<Users[]> {
    const skip = (page - 1) * limit;
    return this.repo.find({
      skip,
      take: limit,
    });
  }

  async save(userDto: UserDto) {
    return this.repo.save(userDto);
  }
  async update(id: number, userDto: UserDto): Promise<UpdateResult> {
    return await this.repo.update(id, userDto);
  }
  async delete(id: number) {
    return await this.repo.delete(id);
  }
  async getUserById(id: number): Promise<Users> {
    return await this.repo.findOne({ where: { id } });
  }
}
