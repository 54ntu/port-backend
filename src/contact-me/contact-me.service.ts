import { Injectable } from '@nestjs/common';
import { CreateContactMeDto } from './dto/create-contact-me.dto';
import { UpdateContactMeDto } from './dto/update-contact-me.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactMe } from './entities/contact-me.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactMeService {
  constructor(@InjectRepository(ContactMe) private contactMeRepository: Repository<ContactMe>) { }
  create(createContactMeDto: CreateContactMeDto) {
    try {
      const contactMe = this.contactMeRepository.create(createContactMeDto);
      return this.contactMeRepository.save(contactMe);

    } catch (error) {
      throw new Error("Error creating contact me: " + error.message);

    }
  }



  async findAll() {
    const datas = await this.contactMeRepository.find()
    // console.log(datas)
    if (datas.length === 0) {
      return { message: "No data found" }
    }

    return { message: "Contact Me data fetched successfully", datas }
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
