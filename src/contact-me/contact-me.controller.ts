import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ContactMeService } from './contact-me.service';
import { CreateContactMeDto } from './dto/create-contact-me.dto';
import { UpdateContactMeDto } from './dto/update-contact-me.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactMe } from './entities/contact-me.entity';
import { Repository } from 'typeorm';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('contact-me')
export class ContactMeController {
  constructor(private readonly contactMeService: ContactMeService) { }

  @Post()
  create(@Body() createContactMeDto: CreateContactMeDto) {
    return this.contactMeService.create(createContactMeDto);
  }


  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.contactMeService.findAll();
  }



  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactMeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContactMeDto: UpdateContactMeDto) {
    return this.contactMeService.update(+id, updateContactMeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactMeService.remove(+id);
  }
}
