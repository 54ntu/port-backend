import { Injectable } from '@nestjs/common';
import { CreateMyportfolioDto } from './dto/create-myportfolio.dto';
import { UpdateMyportfolioDto } from './dto/update-myportfolio.dto';

@Injectable()
export class MyportfolioService {
  create(createMyportfolioDto: CreateMyportfolioDto) {
    return 'This action adds a new myportfolio';
  }

  findAll() {
    return `This action returns all myportfolio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} myportfolio`;
  }

  update(id: number, updateMyportfolioDto: UpdateMyportfolioDto) {
    return `This action updates a #${id} myportfolio`;
  }

  remove(id: number) {
    return `This action removes a #${id} myportfolio`;
  }
}
