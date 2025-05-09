import { Injectable, NotFoundException } from '@nestjs/common';
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




  async findAll() {
    const datas = await this.aboutRepository.find()
    if (datas.length === 0) {
      throw new NotFoundException('data not  found')

    }

    return {
      status: 'success',
      message: 'data found',
      data: datas
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} about`;
  }

  async update(id: number, updateAboutDto: UpdateAboutDto, files: Array<Express.Multer.File>) {
    try {
      let imageFilename = files?.[0]?.filename
      const data = await this.aboutRepository.find({ where: { id } })
      if (!data || data.length === 0) {
        throw new NotFoundException('data not found')
      }
      imageFilename = `http://localhost:3000/uploads/about/${imageFilename}`
      const updatedData = await this.aboutRepository.update(id, { ...updateAboutDto, image: imageFilename })

      return {
        status: 'success',
        message: 'data updated successfully',

      }
    } catch (error) {
      return {
        status: 'error',
        message: 'Error updating about',
        error: error.message,
      }

    }
  }

  async remove(id: number) {
    const data = await this.aboutRepository.find({ where: { id } })
    console.log('data', data);
    if (!data || data.length === 0) {
      throw new NotFoundException('data not found')
    }

    this.aboutRepository.delete(id)
    return {
      status: 'success',
      message: 'data deleted successfully',
    }
  }
}
