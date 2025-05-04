import { PartialType } from '@nestjs/mapped-types';
import { CreateMyportfolioDto } from './create-myportfolio.dto';

export class UpdateMyportfolioDto extends PartialType(CreateMyportfolioDto) {}
