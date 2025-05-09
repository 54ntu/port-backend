import { Injectable } from '@nestjs/common';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { About } from './entities/about.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AboutService {
  constructor(@InjectRepository(About) private aboutRepository: Repository<About>) { }
  create(createAboutDto: CreateAboutDto, files: Array<Express.Multer.File>) {
    try {
      // console.log(createAboutDto, files)
      // return 'This action adds a new about';
      const imageFilename = files?.[0]?.filename
      // console.log('imageFilename', imageFilename);


      const newAbout = this.aboutRepository.create({ ...createAboutDto, image: imageFilename });
      newAbout.image = `http://localhost:3000/uploads/about/${newAbout.image}`
      return this.aboutRepository.save(newAbout)
      // const savedAbout = this.aboutRepository.save(newAbout);
      // console.log('savedAbout', savedAbout);
      // return {
      //   status: 'success',
      //   message: 'About created successfully',
      //   data: savedAbout,

      // }
    } catch (error) {
      return {
        status: 'error',
        message: 'Error creating about',
        error: error.message,
      }

    }
  }




  findAll() {
    return `This action returns all about`;
  }

  findOne(id: number) {
    return `This action returns a #${id} about`;
  }

  update(id: number, updateAboutDto: UpdateAboutDto) {
    return `This action updates a #${id} about`;
  }

  remove(id: number) {
    return `This action removes a #${id} about`;
  }
}
