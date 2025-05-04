import { Injectable } from '@nestjs/common';
import { CreateContactMeDto } from './dto/create-contact-me.dto';
import { UpdateContactMeDto } from './dto/update-contact-me.dto';

@Injectable()
export class ContactMeService {
  create(createContactMeDto: CreateContactMeDto) {
    return 'This action adds a new contactMe';
  }

  findAll() {
    return `This action returns all contactMe`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contactMe`;
  }

  update(id: number, updateContactMeDto: UpdateContactMeDto) {
    return `This action updates a #${id} contactMe`;
  }

  remove(id: number) {
    return `This action removes a #${id} contactMe`;
  }
}
