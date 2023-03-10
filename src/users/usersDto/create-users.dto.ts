import { IsEmail, IsIn, IsMimeType, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from "class-validator"

export class CreateUserDto {

    @IsString()
    username: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsEmail()
    email: string;

    @IsNumber()
    age: number;

    @IsIn(['admin', 'moderator', 'customer'])
    role: string;

    // @IsMimeType()
    @IsOptional()
    profileImage?: string;
}