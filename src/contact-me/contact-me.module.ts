import { Module } from '@nestjs/common';
import { ContactMeService } from './contact-me.service';
import { ContactMeController } from './contact-me.controller';

@Module({
  controllers: [ContactMeController],
  providers: [ContactMeService],
})
export class ContactMeModule {}
