import { Module } from '@nestjs/common';
import { ContactMeService } from './contact-me.service';
import { ContactMeController } from './contact-me.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactMe } from './entities/contact-me.entity';
import { MyportfolioModule } from 'src/myportfolio/myportfolio.module';

@Module({
  imports: [TypeOrmModule.forFeature([ContactMe]), MyportfolioModule],
  controllers: [ContactMeController],
  providers: [ContactMeService],
})
export class ContactMeModule { }
