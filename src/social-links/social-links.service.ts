import { Injectable } from '@nestjs/common';
import { CreateSocialLinkDto } from './dto/create-social-link.dto';
import { UpdateSocialLinkDto } from './dto/update-social-link.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SocialLink } from './entities/social-link.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SocialLinksService {
  constructor(@InjectRepository(SocialLink) private socialLinkRepository: Repository<SocialLink>) { }
  create(createSocialLinkDto: CreateSocialLinkDto) {
    try {
      const socialLink = this.socialLinkRepository.create(createSocialLinkDto);
      if (!socialLink) {
        throw new Error('Error creating social link');
      }
      return this.socialLinkRepository.save(socialLink);
    } catch (error) {
      return { message: error.message }
    }
  }



  findAll() {
    try {
      const socialLinks = this.socialLinkRepository.find();
      if (!socialLinks) {
        throw new Error('Error fetching social links');
      }
      return socialLinks;
    } catch (error) {
      return { message: error.message }
    }
  }

  

  findOne(id: number) {
    return `This action returns a #${id} socialLink`;
  }

  update(id: number, updateSocialLinkDto: UpdateSocialLinkDto) {
    return `This action updates a #${id} socialLink`;
  }

  remove(id: number) {
    return `This action removes a #${id} socialLink`;
  }
}
