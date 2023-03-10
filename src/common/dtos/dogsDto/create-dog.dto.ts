import { IsNumber, IsString, IsUUID, Length, Min, MinLength } from "class-validator";

export class createDogDto {

    @IsString()
    @MinLength(2)
    name: string

    @IsNumber()
    @Min(0)
    age: number

    @IsString()
    @Length(2, 20)
    owner: string

    @IsString()
    color: string;
}