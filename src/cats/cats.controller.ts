import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UseFilters, UsePipes, ValidationPipe, HttpException, BadRequestException, HttpStatus, NotFoundException } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from '../common/dtos/catsDto/create-cat.dto';
import { UpdateCatDto } from '../common/dtos/catsDto/update-cat.dto';
import { HttpExceptionFilter } from 'src/common/errors/http-exception.filter';
import { DatabaseExceptionFilter } from 'src/common/errors/db-exception.filter';


@Controller('cats')
export class CatsController {

    constructor(
        private readonly catsService: CatsService
    ){}
    
    @Get()
    getAllCats() {
        return this.catsService.findAll();
    }

    @Get(':id')
    getCatById(@Param('id', ParseUUIDPipe) id: string){
        return this.catsService.findOne(id);
        
    }

    @Post()
    @UsePipes(ValidationPipe)
    createCat(@Body() createCatDto: CreateCatDto){
        return this.catsService.create(createCatDto);
        
    }

    @Patch(':id')
    updateCat(
        @Param('id', ParseUUIDPipe) id: string, 
        @Body() updateCatDto: UpdateCatDto)
    {
        return this.catsService.update(id, updateCatDto);  
    }

    @Delete(':id')
    deleteCat(@Param('id', ParseUUIDPipe) id: string){
        return this.catsService.delete(id)
    }
    
}
