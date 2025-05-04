import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MyportfolioService } from './myportfolio.service';
import { CreateMyportfolioDto } from './dto/create-myportfolio.dto';
import { UpdateMyportfolioDto } from './dto/update-myportfolio.dto';

@Controller('myportfolio')
export class MyportfolioController {
  constructor(private readonly myportfolioService: MyportfolioService) {}

  @Post()
  create(@Body() createMyportfolioDto: CreateMyportfolioDto) {
    return this.myportfolioService.create(createMyportfolioDto);
  }

  @Get()
  findAll() {
    return this.myportfolioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.myportfolioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMyportfolioDto: UpdateMyportfolioDto) {
    return this.myportfolioService.update(+id, updateMyportfolioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.myportfolioService.remove(+id);
  }
}
