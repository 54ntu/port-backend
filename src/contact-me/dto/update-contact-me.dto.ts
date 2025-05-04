import { PartialType } from '@nestjs/mapped-types';
import { CreateContactMeDto } from './create-contact-me.dto';

export class UpdateContactMeDto extends PartialType(CreateContactMeDto) {}
