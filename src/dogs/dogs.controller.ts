import { Body, Controller, Get, Param, ParseUUIDPipe, Post, UsePipes, ValidationPipe, } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { createDogDto } from '../common/dtos/dogsDto/create-dog.dto';



@Controller('dogs')
export class DogsController {

    constructor(
        private readonly dogsService: DogsService
    ){}

    @Get()
    getAllDogs() {
        return this.dogsService.findAll();
    }

    @Get(':id')
    getDogById(@Param('id', ParseUUIDPipe)  id: string){
        return this.dogsService.findOne(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createDog(@Body() createDogsDto: createDogDto){
        return this.dogsService.create(createDogsDto);
    }

}
