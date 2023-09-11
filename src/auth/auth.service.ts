import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Users } from './entities/auth.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterDto, LoginDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

const email = 'duonghuyhoang2003working@gmail.com';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users)
    private repo: Repository<Users>,
  ) {}

  async register(registerDto: RegisterDto) {
    const { username, password } = registerDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = this.repo.create({ username, password: hashedPassword });
    await this.repo.save(newUser);

    return {
      code: 200,
      message: 'success!!!',
    };
  }

  async login(loginDto: LoginDto) {
    const { username, password } = loginDto;
    const user = await this.repo.findOne({ where: { username } });

    if (!user) {
      throw new NotFoundException('Incorrect username');
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      throw new UnauthorizedException('Incorrect password');
    }
    const accessToken = jwt.sign({ username }, process.env.JWT_SECRET);
    // await this.mailService.sendRegistrationEmail(email, username);
    return {
      code: 200,
      message: 'Login successful',
      accessToken,
    };
  }
}
