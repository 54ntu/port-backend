import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateMyportfolioDto } from './dto/create-myportfolio.dto';
import { UpdateMyportfolioDto } from './dto/update-myportfolio.dto';
import { LoginMyportfolioDto } from './dto/login-myportfolio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { comparedPassword } from 'src/utils/comparePassword.bcrypt';
import { Myportfolio } from './entities/myportfolio.entity'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class MyportfolioService {
  constructor(@InjectRepository(Myportfolio) private portfolioRepository: Repository<Myportfolio>,
    private jwtService: JwtService
  ) { }


  async login(loginMyportfolioDto: LoginMyportfolioDto) {

    // console.log(loginMyportfolioDto)
    //check if the user exists in the database
    const userExists = await this.portfolioRepository.findOne({ where: { email: loginMyportfolioDto.email } })
    if (!userExists) {
      throw new NotFoundException('User not found')
    }

    //check if the password is correct

    const isPasswordMatched = await comparedPassword(loginMyportfolioDto.password, userExists.password)
    // console.log(`isPasswordMatched : ${isPasswordMatched}`)


    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid credentials')
    }


    return {
      access_token: await this.jwtService.signAsync({ id: userExists.id, email: userExists.email }),
    }


  }

}
