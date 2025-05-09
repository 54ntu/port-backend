import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, UseGuards } from '@nestjs/common';
import { AboutService } from './about.service';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';
import { AnyFilesInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from 'src/auth/auth.guard';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) { }

  @UseGuards(AuthGuard)
  @Post()
  @UseInterceptors(FilesInterceptor('image', 1, {
    storage: diskStorage({
      destination: './uploads/about',
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
      },
    }),
  }),)
  create(@Body() createAboutDto: CreateAboutDto, @UploadedFiles() files: Array<Express.Multer.File>) {
    return this.aboutService.create(createAboutDto, files);
  }



  @Get()
  findAll() {
    return this.aboutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aboutService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @UseInterceptors(FilesInterceptor('image', 1, {
    storage: diskStorage({
      destination: './uploads/about',
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
      },
    }),
  }),)
  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateAboutDto: UpdateAboutDto, @UploadedFiles() files: Array<Express.Multer.File>) {
    return this.aboutService.update(+id, updateAboutDto, files);
  }

  @UseGuards(AuthGuard)
  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.aboutService.remove(+id);
  }
}
