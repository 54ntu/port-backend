import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MyportfolioService } from './myportfolio.service';
import { CreateMyportfolioDto } from './dto/create-myportfolio.dto';
import { UpdateMyportfolioDto } from './dto/update-myportfolio.dto';
import { LoginMyportfolioDto } from './dto/login-myportfolio.dto';

@Controller('myportfolio')
export class MyportfolioController {
  constructor(private readonly myportfolioService: MyportfolioService) { }


  @Post('login')
  login(@Body() loginMyportfolioDto: LoginMyportfolioDto) {
    return this.myportfolioService.login(loginMyportfolioDto);
  }



}
