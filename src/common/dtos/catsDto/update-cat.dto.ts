import { IsInt, IsOptional, IsPositive, IsString, IsUUID, Length, Min, MinLength } from "class-validator";

export class UpdateCatDto {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString()
    @MinLength(2)
    @IsOptional()
    name?: string;

    @IsInt()
    @IsPositive()
    @Min(1)
    @IsOptional()
    readonly age?: number;

    @IsString()
    @Length(2, 20)
    @IsOptional()
    readonly owner?: string

    @IsString()
    @IsOptional()
    readonly color?: string;
}