import { IsString } from "class-validator";

export class CreateSocialLinkDto {
    @IsString()
    facebook: string;

    @IsString()
    linkedin: string;


    @IsString()
    github: string;
}
