import { IsInt, IsPositive, IsString, IsUUID, Length, Min, MinLength } from "class-validator";

export class CreateCatDto {

    @IsString()
    @MinLength(2)
    name: string;

    @IsInt()
    @IsPositive()
    @Min(1)
    age: number;

    @IsString()
    @Length(2, 20)
    owner: string;

    @IsString()
    color: string;

    @IsUUID()
    User_id: string;
}