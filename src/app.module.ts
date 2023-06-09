import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [AuthModule, TestModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
