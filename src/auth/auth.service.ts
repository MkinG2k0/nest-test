import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { AuthDto } from './dto/auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  create(createAuthDto: AuthDto) {
    return this.prisma.user.create({ data: createAuthDto });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return '';
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }

  async auth(authUser: AuthDto) {
    const user = await this.prisma.user.findMany({ where: authUser });
    return user[0];
  }
}
