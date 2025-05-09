import { PartialType } from '@nestjs/mapped-types';
import { CreateAboutDto } from './create-about.dto';
import { IsString } from 'class-validator';

export class UpdateAboutDto extends PartialType(CreateAboutDto) {
    @IsString()
    content: string

    @IsString()
    image: string
}
