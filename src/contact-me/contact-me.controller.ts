import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactMeService } from './contact-me.service';
import { CreateContactMeDto } from './dto/create-contact-me.dto';
import { UpdateContactMeDto } from './dto/update-contact-me.dto';

@Controller('contact-me')
export class ContactMeController {
  constructor(private readonly contactMeService: ContactMeService) {}

  @Post()
  create(@Body() createContactMeDto: CreateContactMeDto) {
    return this.contactMeService.create(createContactMeDto);
  }

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
