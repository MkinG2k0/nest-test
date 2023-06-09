import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { TestService } from './test.service';
import { TestController } from './test.controller';

@Module({
  controllers: [TestController],
  providers: [TestService, PrismaService],
})
export class TestModule {}
