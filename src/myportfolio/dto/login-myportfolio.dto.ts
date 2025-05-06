import { IsEmail, IsString } from "class-validator";

export class LoginMyportfolioDto {
    @IsEmail()
    email: string;

    @IsString()
    password: string;
}    