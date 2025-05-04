import { Module } from '@nestjs/common';
import { MyportfolioService } from './myportfolio.service';
import { MyportfolioController } from './myportfolio.controller';

@Module({
  controllers: [MyportfolioController],
  providers: [MyportfolioService],
})
export class MyportfolioModule {}
