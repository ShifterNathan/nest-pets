import { IsIn, IsMimeType, IsOptional, IsString, Length } from "class-validator";

export class CatsDto {
    
    @IsString()
    @Length(1, 100)
    tittle: string;

    @IsString()
    @Length(200)
    body: string;

    @IsIn(['General', 'Off topic', 'perros', 'gatos'])
    category: string;

    @IsString()
    //@IsMimeType()
    @IsOptional()
    image?: string
}