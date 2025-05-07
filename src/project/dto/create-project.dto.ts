import { IsString } from "class-validator";

export class CreateProjectDto {

    @IsString()
    projectName: string;

    @IsString()
    projectDescription: string;

    @IsString()
    projectLinks: string;

    @IsString()
    techUsed: string[];


}
