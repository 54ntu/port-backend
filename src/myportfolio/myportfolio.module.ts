import { Module } from '@nestjs/common';
import { MyportfolioService } from './myportfolio.service';
import { MyportfolioController } from './myportfolio.controller';
import { Myportfolio } from './entities/myportfolio.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Myportfolio,]), JwtModule.register({
    secret: process.env.JWT_SECRET_KEY || "hsafhasfdskfhdsjkfhdslkf",
    signOptions: { expiresIn: process.env.JWT_EXPIRY || '1d' }, // 1 hour expiration
  })],
  controllers: [MyportfolioController],
  providers: [MyportfolioService],
})
export class MyportfolioModule { }
