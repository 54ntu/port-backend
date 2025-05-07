import { IsString } from "class-validator";

export class CreateContactMeDto {
    @IsString()
    name: string;

    @IsString()
    email: string;


    @IsString()
    message: string;

    @IsString()
    Phone: string;
}
