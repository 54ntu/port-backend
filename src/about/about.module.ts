import { Module } from '@nestjs/common';
import { AboutService } from './about.service';
import { AboutController } from './about.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { About } from './entities/about.entity';
import { MyportfolioModule } from 'src/myportfolio/myportfolio.module';

@Module({

  imports: [TypeOrmModule.forFeature([About,]), MyportfolioModule], // Add your entities here if needed
  controllers: [AboutController],
  providers: [AboutService],
})
export class AboutModule { }
